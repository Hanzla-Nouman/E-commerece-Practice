import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Search from "./Search";
import { useSelector } from "react-redux";
import { loadUser, logout } from "../store/userActions";
import { useDispatch } from "react-redux";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutUser = () => {
    dispatch(logout());
    navigate("/");
  };
  let { userRole, isAuthenticated, loading, username } = useSelector(
    (state) => state.userReducer
  );
  let { cartItems } = useSelector((state) => state.cartReducer);

  return (
    <>
      {!loading && (
        <div className="navbar bg-base-300" style={{ zIndex: "2" }}>
          <div className="flex-1">
            <a className="btn btn-ghost text-xl">UrbanAura</a>
            <div className="navbar-center hidden lg:flex">
              <ul
                className="menu menu-horizontal px-1"
                style={{ alignItems: "center" }}
              >
                <li>
                  {" "}
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <a>About</a>
                </li>
                <li>
                  <a>Contact Us</a>
                </li>
                <li>
                  <label
                    htmlFor="my-drawer"
                    className="btn btn-primary drawer-button"
                  >
                    Apply Filters
                  </label>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex-none">
            <Search />
            <Link to={"cart"}>
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
              >
                <div className="indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span className="badge badge-sm indicator-item ">
                    {cartItems.length}
                  </span>
                </div>
              </div>
            </Link>
            {localStorage.getItem("isAuthenticated") ? (
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div
                    className="w-12 rounded-full"
                    style={{
                      background: "#fff",
                      alignItems: "center",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <h1 className="text-3xl">{username.split("")[0]}</h1>
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-slate-200 rounded-box w-30"
                >
                  {userRole === "admin" && (
                    <li>
                      <Link to={"/dashboard"}>Dashboard</Link>
                    </li>
                  )}
                  {isAuthenticated === true && (
                    <>
                      <li>
                        <Link to={"/account"}>
                          <span className="material-symbols-outlined">
                            account_circle
                          </span>
                          Profile
                        </Link>
                      </li>
                      <li>
                        <Link to={"/orders"}>
                          <span className="material-symbols-outlined">orders</span>
                          Orders
                        </Link>
                      </li>
                    </>
                  )}
                  <li onClick={logoutUser}>
                    <a>
                      <span className="material-symbols-outlined">logout</span>
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
            ) : (
              <>
                <Link to={"/signup"}>
                  <button className="btn btn-primary mr-2 ml-2"> Signup</button>
                </Link>
                <Link to={"/login"}>
                  <button className="btn btn-primary"> LogIn</button>
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
