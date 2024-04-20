import React, { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { updatePassword ,clearErrors,loadUser} from "../store/userActions";
import Loader from "./Loader";


const UpdatePassword = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
 
    const { loading } = useSelector(
      (state) => state.profileReducer
    );

    const [passwords, setPasswords] = useState({
        oldPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
      
      const { oldPassword, newPassword, confirmPassword} = passwords;
    
    
      const passwordDataChange = (e) => {
        setPasswords({ ...passwords, [e.target.name]: e.target.value });
      };
    
      const handlePasswordSubmit = async (e) => {
        e.preventDefault();
        const myForm = new FormData();
        myForm.set("oldPassword", oldPassword);
        myForm.set("newPassword", newPassword);
        myForm.set("confirmPassword", confirmPassword);
        try {
          await dispatch(updatePassword(myForm));
        //   await dispatch(loadUser());
          navigate("/account");
          setPasswords({
            oldPassword: "",
            newPassword: "",
            confirmPassword: "",
          });
        } catch (error) {
          console.error("Error during signup:", error);
        }
      };

 

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
                Update Password
                <div className="divider"></div>
              </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form className="space-y-6" onSubmit={handlePasswordSubmit}>
                <div className="sm:col-span-3">
                  <div>
                    <div className="flex ">
                      <label
                        htmlFor="password"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Old Password
                      </label>
                    </div>
                    <div className=" mt-1.5">
                      <input
                        id="password"
                        name="oldPassword"
                        value={oldPassword}
                        type="password"
                        placeholder="Old Password"
                        autoComplete="current-password"
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        onChange={passwordDataChange}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex mt-2">
                      <label
                        htmlFor="password"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        New Password
                      </label>
                    </div>
                    <div className="flex mt-1">
                      <input
                        id="password"
                        name="newPassword"
                        value={newPassword}
                        type="password"
                        placeholder="New Password"
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

export default UpdatePassword;
