import React, { useState,useEffect,useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { resetPassword ,clearErrors,loadUser} from "../store/userActions";
import Loader from "./Loader";
import { useParams } from 'react-router-dom';


const ResetPassword = () => {
    const { token } = useParams(); // Get token from URL params
    const dispatch = useDispatch();
    const navigate = useNavigate();
 
    const passwordRef = useRef(null);

    const { loading ,error,success} = useSelector(
      (state) => state.forgetPasswordReducer
    );

    const [passwords, setPasswords] = useState({
        password: "",
        confirmPassword: "",
      });
      
      const {  password, confirmPassword} = passwords;
    
    
      const passwordDataChange = (e) => {
        setPasswords({ ...passwords, [e.target.name]: e.target.value });
      };
    
      const handlePasswordSubmit = async (e) => {
        e.preventDefault();
        console.log("hi")
        const myForm = new FormData();
        myForm.set("password", password); 
        myForm.set("confirmPassword", confirmPassword);
        try {
          await dispatch(resetPassword(token,myForm)); 
        //   await dispatch(loadUser()); 
          
        //  await  navigate("/login");
          setPasswords({
            password: "",
            confirmPassword: "",
          });
        } catch (error) {
          console.log("Error during signup:", error);
        }
      };

      useEffect(() => {
        // Set focus on the input field when the component mounts
        if (passwordRef.current) {
          passwordRef.current.focus();
        }
      }, []);

  return (
    <>
      {loading ? (  
        <Loader />
      ) : (
        <div
          className="flex min-h-full  flex-1 flex-col justify-center px-6 py-12 lg:px-8"
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
              New Password
                <div className="divider"></div>
              </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form className="space-y-6" onSubmit={handlePasswordSubmit}>
                <div className="sm:col-span-3">
                  <div>
                    <div className="flex mt-2">
                      <label
                        htmlFor="password"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Password
                      </label>
                    </div>
                    <div className="flex mt-1">
                      <input
                        id="password"
                        name="password"
                        value={password}
                        ref={passwordRef}
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        onChange={passwordDataChange}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex mt-2 ">
                      <label
                        htmlFor="password"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Confirm Password
                      </label>
                    </div>
                    <div className="flex  mt-1">
                      <input
                        id="password"
                        name="confirmPassword"
                        value={confirmPassword}
                        type="password"
                        placeholder="Confirm Password"
                        autoComplete="current-password"
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        onChange={passwordDataChange}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Update Password
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

export default ResetPassword;
