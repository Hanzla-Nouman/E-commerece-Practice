import React from "react";
import Steppers from "./Steppers";
import { useSelector } from "react-redux";
import CartItemCard from "./CartItemCard";
import Nothing from "./Nothing";
import { useNavigate } from "react-router";

const ConfirmOrder = () => {
  const navigate = useNavigate()
  const { shippingInfo, cartItems } = useSelector((state) => state.cartReducer);
  const { username } = useSelector((state) => state.userReducer);
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );
  
  const shippingCharges = subtotal > 1000 ? 0 : 200;
  const tax = Number((subtotal * 0.18).toFixed(0));
  const totalPrice = subtotal + tax + shippingCharges;
  const address = `${shippingInfo.address},${shippingInfo.city},${shippingInfo.state}, ${shippingInfo.country}`;

  const checkoutHandler =()=>{
    const data = {subtotal,shippingCharges,tax,totalPrice}
    sessionStorage.setItem("orderInfo",JSON.stringify(data))
    navigate("/process/payment")
  }
  return (
    <div >
      <Steppers step={1} />
    <div className="mb-12 flex justify-between mr-5 ml-5">
      <div className="ml-3 mt-4">
        <h1 className="text-3xl font-medium">Shipping Info</h1>
        <div className="mx-4 mt-2">
        <div className="flex items-center">
          <p className="text-lg">Name:</p>
          <p className="font-semibold italic mx-3 text-lg">{username}</p>
        </div>
        <div className="flex items-center">
          <p className="text-lg">Phone No:</p>
          <p className="font-semibold italic mx-3 text-lg">{shippingInfo.phoneNo}</p>
        </div>
        <div className="flex items-center">
          <p className="text-lg">Address:</p>
          <p className="font-semibold italic mx-3 text-lg">{address}</p>
        </div>
        </div>
        <div style={{width:"70%"}} className="mt-4">
              <div className="bg-slate-400 cart-header p-3  font-semibold">
                <p>Product</p>
                <p>Price</p>
                <p style={{ marginLeft: "23px" }}>Quantity</p>
                <p style={{ marginRight: "40px" }}>Subtotal</p>
              </div>
              <div>
                {cartItems.length !== 0 ? (
                  cartItems.map((item) => (
                    <CartItemCard item={item} key={item.name} />
                  ))
                ) : (
                  <Nothing />
                )}
              </div>
            </div>
      </div>
      <div
            className="   mr-6 mt-8  bg-base-300  mb-3  top-50  right-0"
            style={{ height: "300px", borderRadius: "10px", minWidth: "300px",position:"fixed", }}
          >
            <p className="font-semibold text-2xl ml-2 mt-4 text-center " >
              Order Summary
            </p>
            <div className="flex justify-between mr-4 ml-4 mt-3 font-semibold">
              <div className="flex text-lg text-slate-600">
                <p className="">Subtotal</p>
                <p className="ml-2">({ cartItems.length} items)</p>
              </div>
              <p className="text-xl">
                $
                {cartItems.reduce(
                  (acc, item) => item.quantity * item.price + acc,
                  0
                )}
              </p>
            </div>
            <div className="flex justify-between mr-4 ml-4 mt-2 font-semibold">
              <p className="text-lg text-slate-600">Shipping Fee</p>
              <p className="text-xl">${shippingCharges}</p>
            </div>
            <div className="flex justify-between mr-4 ml-4 mt-2 font-semibold">
              <p className="text-lg text-slate-600">Gst</p>
              <p className="text-xl">${tax}</p>
            </div>
            <div className="divider mb-2 mt-2"></div>
            <div className="flex items-center justify-between mr-4 ml-4 mb-3 font-semibold">
              <p className="text-xl">Total</p>
              <p className="text-2xl">
                ${totalPrice}
                
              </p>
            </div>
            <div className="text-center"> 
            
              <button
                className="btn btn-md  btn-primary"
                onClick={checkoutHandler}     
              >
                Procceed to CheckOut
              </button>
            </div>
          </div>
    </div>
    </div>
  );
};

export default ConfirmOrder;
