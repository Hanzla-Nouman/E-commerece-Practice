import React, { useState,useEffect ,useRef} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { loadUser, updateProfile ,clearErrors} from "../store/userActions";
import Loader from "./Loader";

const UpdateProfile = () => {
  const dispatch = useDispatch();
 
  const { error, isUpdated, loading } = useSelector(
    (state) => state.profileReducer
  );
  const navigate = useNavigate();

  const [User, setUser] = useState({
    name: "",
    email: "",
  });

  const { name, email } = User;


  const registerDataChange = (e) => {
    setUser({ ...User, [e.target.name]: e.target.value });
  };

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.set("name", name);
    myForm.set("email", email);
    try {
      await dispatch(updateProfile(myForm));
      await dispatch(loadUser());
      navigate("/account");
      setUser({
        name: "",
        email: "",
      });
    } catch (error) {
      console.error("Error during signup:", error);
    }
  };
  const nameRef = useRef(null);
  useEffect(() => {
    // Set focus on the input field when the component mounts
    if (nameRef.current) {
      nameRef.current.focus();
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
                Update Profile
                <div className="divider"></div>
              </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form className="space-y-6" onSubmit={handleUpdateSubmit}>
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
                      ref={nameRef}
                      value={name}
                      autoComplete="given-name"
                      placeholder="John Doe"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={registerDataChange}
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
                      className="flex-grow rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={registerDataChange}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex "></div>
                </div>
                <div></div>
                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Update Profile
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

export default UpdateProfile;
