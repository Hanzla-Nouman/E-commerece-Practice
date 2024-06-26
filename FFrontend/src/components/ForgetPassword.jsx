import React, {useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, forgetPassword } from "../store/userActions";
import { useNavigate } from "react-router-dom";


import Loader from './Loader';

const ForgetPassword = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { error, loading,message } = useSelector(
    (state) => state.forgetPasswordReducer
  );
  const [email, setEmail] = useState('');
  const emailRef = useRef(null);
 
  useEffect(() => {
    // Set focus on the input field when the component mounts
    if (emailRef.current) {
      emailRef.current.focus();
    }
  }, []);
  const forgetPasswordSubmit =  async (e) => {
    e.preventDefault();
   await dispatch(forgetPassword(email))
   setEmail("")
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div
          className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8"
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
                Reset your password
                <div className="divider"></div>
              </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form className="space-y-6" onSubmit={forgetPasswordSubmit}>
                <div className=" grid grid-cols-1   sm:grid-cols-6"></div>
                <div>
                  <label
                    htmlFor="email"
                    className="block font-semibold leading-6 text-gray-900 text-left"
                  >
                    Email address
                  </label>
                  <div className="mt-2 flex">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      ref={emailRef}
                      autoComplete="email"
                      placeholder="example123@gmail.com"
                      required
                      className="flex-grow rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Reset your password
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ForgetPassword;
