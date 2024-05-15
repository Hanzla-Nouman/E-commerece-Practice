import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getOrdersDetails } from "../store/orderActions";

const OrderDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { isAuthenticated } = useSelector((state) => state.userReducer);
  const { order, loading, error } = useSelector(
    (state) => state.orderDetailReducer
  );

  useEffect(() => {
    dispatch(getOrdersDetails(id));
  }, [dispatch, id]);

  return (
    <>
      <div className="mb-12 flex justify-between mr-5 ml-5">
        <div className="ml-3 mt-4">
          <h1 className="text-3xl font-medium">Shipping Info</h1>
          <div className="mx-4 mt-2">
            <div className="flex items-center">
              <p className="text-lg">
                Name: {order && order.user && order.user.name}
              </p>
              <p className="font-semibold italic mx-3 text-lg"></p>
            </div>
            <div className="flex items-center">
              <p className="text-lg">
                Phone No:{" "}
                {order && order.shippingInfo && order.shippingInfo.phoneNo}
              </p>
              <p className="font-semibold italic mx-3 text-lg"></p>
            </div>
            <div className="flex items-center">
              <p className="text-lg">
                Address:{" "}
                {order && order.shippingInfo && order.shippingInfo.address}
              </p>
              <p className="font-semibold italic mx-3 text-lg"></p>
            </div>
          </div>
          <div style={{ width: "70%" }} className="mt-4">
            <div className="bg-slate-400 cart-header p-3  font-semibold">
              <p>Product</p>
              <p>Price</p>
              <p style={{ marginLeft: "23px" }}>Quantity</p>
              <p style={{ marginRight: "40px" }}>Subtotal</p>
            </div>
            <div>
              {order &&
                order.orderItems &&
                order.orderItems.map((item) => (
                  <>
                    <div key={item.name}>
                      <div className=" single-item-cart font-semibold mt-2 p-2  bg-slate-200 items-center">
                        <span className="flex ">
                          <img
                            src={item.image}
                            className="item-image"
                            alt=""
                            width="60px"
                            height="60px"
                          />
                          <p className="ml-2 text-left mr-2">
                            <a href="" className="font-link">
                              {item.name} Lorem ipsum dolor sit amet,
                              consectetur adipisicing elit. Sit rerum quasi,
                              asperiores ut quam ipsum unde non sunt ad
                            </a>
                          </p>
                        </span>
                        <span className="ml-3">{`$${item.price}`}</span>
                        <span>
                          <div
                            className="mt-2 mb-2"
                            style={{ display: "flex" }}
                          >
                            <input
                              className=" bg-base-300 count-input-cart    "
                              readOnly
                              value={item.quantity}
                            />
                          </div>
                        </span>
                        <span>${item.price * item.quantity}</span>
                        <span className="cross"></span>
                      </div>
                    </div>
                  </>
                ))}
            </div>
          </div>
        </div>
        <div
          className="mr-6 mt-8 bg-base-300 mb-3 top-50 right-0"
          style={{
            height: "240px",
            borderRadius: "10px",
            minWidth: "300px",
            position: "fixed",
          }}
        >
          <p className="font-semibold text-2xl ml-2 mt-4 text-center">
            Order Summary
          </p>
          <div className="flex justify-between mr-4 ml-4 mt-5 font-semibold">
            <div className="flex text-lg text-slate-600">
              <p className="">Subtotal</p>
              <p className="ml-2">
                ({order && order.orderItems && order.orderItems.length} items)
              </p>
            </div>
            <p className="text-xl">
              $
              {order &&
                order.itemsPrice *
                  (order.orderItems && order.orderItems.length)}
            </p>
          </div>
          <div className="flex justify-between mr-4 ml-4 mt-2 font-semibold">
            <p className="text-lg text-slate-600">Shipping Fee</p>
            <p className="text-xl">${order && order.shippingPrice}</p>
          </div>
          <div className="flex justify-between mr-4 ml-4 mt-2 font-semibold">
            <p className="text-lg text-slate-600">Gst</p>
            <p className="text-xl">${order && order.taxPrice}</p>
          </div>
          <div className="flex items-center justify-between mr-4 ml-4 mb-3 font-semibold mt-3">
            <p className="text-xl">Total</p>
            <p className="text-2xl">${order && order.totalPrice}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderDetails;
