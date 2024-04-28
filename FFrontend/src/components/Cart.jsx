import React from "react";
import CartItemCard from "./CartItemCard";
import {useDispatch,useSelector} from 'react-redux';

const Cart = () => {
    const dispatch = useDispatch()
    const {cartItems} = useSelector(state=>state.cartReducer)
  // console.log(cartItems)
  
  return (
    <>
      <div>
        <h1 className="text-3xl font-bold text-center m-3">Shopping Cart</h1>
        <div style={{ display: "flex" }}>
          <div className="m-4">
            <div>
              <div className="bg-slate-400 cart-header p-3  font-semibold">
                <p>Product</p>
                <p>Price</p>
                <p style={{ marginLeft: "23px" }}>Quantity</p>
                <p style={{ marginRight: "40px" }}>Subtotal</p>
              </div>
              {cartItems && cartItems.map((item)=> (<CartItemCard item={item} /> ))}
              
              {cartItems && cartItems.map((item)=>{<CartItemCard item={item} />})}
            </div>
          </div>

          <div
            className="   mr-6 mt-4 bg-base-300 "
            style={{ height: "300px", borderRadius: "0px", width: "500px" }}
          >
            <p className="font-semibold text-2xl ml-2 mt-3 text-center">
              Order Summary
            </p>
            <div className="flex justify-between mr-4 ml-4 mt-3 font-semibold">
              <div className="flex text-lg text-slate-600">
                <p className="">Subtotal</p>
                <p className="ml-2">(7 items)</p>
              </div>
              <p className="text-xl">$790</p>
            </div>
            <div className="flex justify-between mr-4 ml-4 mt-3 font-semibold">
              <p className="text-lg text-slate-600">Shipping Fee</p>
              <p className="text-xl">$899</p>
            </div>
            <div className="divider"></div>
            <div className="flex items-center justify-between mr-4 ml-4 mt-4 font-semibold">
              <p className="text-xl">Total</p>
              <p className="text-2xl">$899</p>
            </div>
            <div className="text-center">
              {" "}
              <button className="btn btn-md mt-4 btn-primary ">
                Procceed to CheckOut
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
