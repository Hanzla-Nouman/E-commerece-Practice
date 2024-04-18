import React, { useState } from "react";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { signup } from "../store/userActions";
import { useDispatch,useSelector } from "react-redux";
import { useNavigate } from "react-router";
import Loader from './Loader'
const Signup = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [avatar, setAvatar] = useState(
    "https://github.com/meabhisingh/mernProjectEcommerce/blob/master/frontend/src/images/Profile.png?raw=true"
  );
  const [avatarPreview, setAvatarPreview] = useState(
    "https://github.com/meabhisingh/mernProjectEcommerce/blob/master/frontend/src/images/Profile.png?raw=true"
  );

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = user;

  const registerDataChange=(e)=>{
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  // const registerAvatarChange = (e) => {
  //   const reader = new FileReader();
  //   reader.onload = () => {
  //     if (reader.readyState === 2) {
  //       setAvatarPreview(reader.result);
  //       setAvatar(reader.result);
  //     }};
  //   reader.readAsDataURL(e.target.files[0])};

  const {  loading } = useSelector(state => state.userReducer);
   

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.set("name", name);
    myForm.set("email", email);
    myForm.set("password", password);
    // myForm.set("avatar", avatar);
    dispatch(signup(myForm,navigate));
    setUser({name: "",
    email: "",
    password: "",})
  };
  return (
    <>
     {loading?(<Loader/>):( <div
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
              Create an account
              <div className="divider"></div>
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" onSubmit={handleSignupSubmit}>
              
                <div className="sm:col-span-3">
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Full Name
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={name}
                      autoComplete="given-name"
                      placeholder="John Doe"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={registerDataChange}
                    />
                  </div>
                </div>

             
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900 text-left"
                >
                  Email address
                </label>
                <div className="mt-2 flex">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={email}
                    autoComplete="email"
                    placeholder="example123@gmail.com"
                    required
                    className="flex-grow rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={registerDataChange}
                  />
                </div>
              </div>

              <div>
                <div className="flex ">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    value={password}
                    type="password"
                    placeholder="Password"
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={registerDataChange}
                  />
                </div>
              </div>
              <div>
               
                <div className="mt-2">
                  
                  {/* <div className="col-span-full">
                    <label
                      htmlFor="photo"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Photo
                    </label>
                    <div className="mt-2 flex items-center gap-x-3">
                      <div className="avatar">
                        <div className="w-16 rounded-full">
                          <img src={avatarPreview} />
                        </div>
                      </div>
                      <label htmlFor="fileInput" className="custom-file-input">
                        Choose File
                      </label>
                      <input
                        type="file"
                        id="fileInput"
                        name="avatar"
                        accept="image/*"
                        onChange={registerAvatarChange}
                      />
                    </div>
                  </div> */}
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>)}
    </>
  );
};

export default Signup;
