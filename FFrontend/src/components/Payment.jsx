
import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, login } from "../store/userActions";
import Loader from "./Loader";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Steppers from './Steppers'

import {
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

const Login = () => {
  const navigate = useNavigate();

  const { shippingInfo,cartItems } = useSelector((state) => state.cartReducer);

  
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
              <form className="" onSubmit={handleLoginSubmit}>
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
                  Card Number
                </label>
                <CardExpiryElement className="flex-grow rounded-md border-0  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6  bg-slate-100 p-3" />
                <label
                  htmlFor="email"
                  className="block font-semibold leading-6 text-gray-900 text-left mt-5"
                >
                  Card Number
                </label>
                <CardCvcElement className="flex-grow rounded-md border-0  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6  bg-slate-100 p-3" />

                

                <div>
                  <button
                    type="submit"
                    className=" mt-8 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Pay-{`${""}`}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      
    </>
  );
};

export default Login;
