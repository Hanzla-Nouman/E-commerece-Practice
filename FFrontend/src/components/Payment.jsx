
import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./Loader";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Steppers from './Steppers'
import axios from "axios";
import { createOrder,clearErrors } from "../store/orderActions";

import {
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

const Payment = () => {
  const orderInfo = JSON.parse(sessionStorage.getItem("orderInfo"));

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const stripe = useStripe();
  const elements = useElements();
  

  const { cartItems,shippingInfo } = useSelector((state) => state.cartReducer);
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );
  const shippingCharges = subtotal > 1000 ? 0 : 200;
  const tax = Number((subtotal * 0.18).toFixed(0));
  const totalPrice = subtotal + tax + shippingCharges;

  const { user} = useSelector((state) => state.userReducer);
  // const { error} = useSelector((state) => state.newOrder);

  const paymentData = {
    amount: Math.round(orderInfo.totalPrice * 100)
  }

const order = {
  shippingInfo,
  orderItems:cartItems,
  itemsPrice: orderInfo.subtotal,
  taxPrice: orderInfo.tax,
  shippingPrice: orderInfo.shippingCharges,
  totalPrice: orderInfo.totalPrice,
}

  const handleSubmit=async(e)=>{
   e.preventDefault()
    try {
      const config = {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      };
      const { data } = await axios.post(
        "http://localhost:4000/api/v1/payment/process",
        paymentData,
        config
      );
      const client_secret = data.client_secret;

      if(!stripe || !elements) return;
      const result = await stripe.confirmCardPayment(client_secret,{
        payment_method:{
          card: elements.getElement(CardNumberElement),
          billing_details:{
            name: user.name, email: user.email,
            address:{
              line1:shippingInfo.address,
              city:shippingInfo.city,
              state:shippingInfo.state,
              postal_code:shippingInfo.pinCode,
              country:shippingInfo.country,
            }
          }
        }
      })
   if(result.error){
    console.log(result.error.message)
   }else{
    if(result.paymentIntent.status === "succeeded"){
      order.paymentInfo = {
        id:result.paymentIntent.id,
        status:result.paymentIntent.status,
      }
      dispatch(createOrder(order))
      // navigate("/success")
    }else{
      console.log("There is some issue while processing payment")
    }
   }
    } catch (error) {
      console.log(error)
    }
  }

  

  
 

  
  return (
    <>
     <Steppers step={2}/>
      
        <div
          className="flex min-h-full  flex-1 flex-col justify-center px-6 mb-6 lg:px-8"
          style={{ justifyContent: "center", alignItems: "center" }}
        >
         
          <div
            className="bg-slate-300"
            style={{
              width: "500px",
              borderRadius: "10px",
              paddingBottom: "60px",
            }}
          > 
            <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
              <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"> 
                Payment
                {/* <div className="divider"></div> */}
              </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form className="" onSubmit={handleSubmit}>
                <div className=" grid grid-cols-1   sm:grid-cols-6"></div>
                <label
                  htmlFor="email"
                  className="block font-semibold leading-6 text-gray-900 text-left"
                >
                  Card Number
                </label>
                <CardNumberElement className="flex-grow rounded-md border-0  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6  bg-slate-100 p-3" />
                <label
                  htmlFor="email"
                  className="block font-semibold leading-6 text-gray-900 text-left mt-5"
                >
                Card Expiry
                </label>
                <CardExpiryElement className="flex-grow rounded-md border-0  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6  bg-slate-100 p-3" />
                <label
                  htmlFor="email"
                  className="block font-semibold leading-6 text-gray-900 text-left mt-5"
                >
                  CVC
                </label>
                <CardCvcElement className="flex-grow  rounded-md border-0  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6  bg-slate-100 p-3" />

                

                <div>
                  <button
              
                    type="submit"
                    className=" mt-8 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                   
                  >
                    Pay-{`$${totalPrice}`}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      
    </>
  );
};

export default Payment;
