import { useNavigate } from "react-router";
import {
  LOGIN_SUCCESS,
  LOGIN_REQUEST,
  LOGIN_FAILURE,
  CLEAR_ERRORS,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAILURE,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_RESET,
  UPDATE_PROFILE_FAILURE,
  UPDATE_PASSWORD_REQUEST,
  UPDATE_PASSWORD_SUCCESS,
  UPDATE_PASSWORD_RESET,
  UPDATE_PASSWORD_FAILURE,
  FORGET_PASSWORD_REQUEST,
  FORGET_PASSWORD_SUCCESS,
  FORGET_PASSWORD_FAILURE,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAILURE,
} from "./actionTypes";
import axios from "axios";

export const login = (email, password, navigate) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });
    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };
    const { data } = await axios.post(
      "http://localhost:4000/api/v1/login",
      { email, password },
      config
    );
    localStorage.setItem("isAuthenticated", true);

    let url = window.location.pathname + window.location.search
    let urlNavigate = url === "/login?redirect=/shipping" ? url.split("=")[1] : "/account"
    navigate(urlNavigate);

    dispatch({ type: LOGIN_SUCCESS, payload: data.user });
  } catch (error) {
    dispatch({ type: LOGIN_FAILURE, payload: error.response.data.message });
  }
};

export const signup = (userData, navigate) => async (dispatch) => {
  try {
    dispatch({ type: SIGNUP_REQUEST });
    const config = {
      headers: { "Content-Type": "multipart/form-data" },
      withCredentials: true,
    };
    const data = await axios.post(
      "http://localhost:4000/api/v1/register",
      userData,
      config
    );
    localStorage.setItem("isAuthenticated", true);
    navigate("/account");

    dispatch({ type: SIGNUP_SUCCESS, payload: data.user });
  } catch (error) {
    if (error.response && error.response.data) {
      dispatch({
        type: LOAD_USER_FAILURE,
        payload: error.response.data.message,
      });
    } else {
      dispatch({ type: LOAD_USER_FAILURE, payload: "Error loading user data" });
    }
  }
};

export const loadUser = () => async (dispatch) => {
  try {
    dispatch({ type: LOAD_USER_REQUEST });
    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };

    const { data } = await axios.get("http://localhost:4000/api/v1/me", config);

    dispatch({ type: LOAD_USER_SUCCESS, payload: data.user });
  } catch (error) {
    if (error.response && error.response.data) {
      dispatch({
        type: LOAD_USER_FAILURE,
        payload: error.response.data.message,
      });
    } else {
      dispatch({ type: LOAD_USER_FAILURE, payload: "Error loading user data" });
    }
  }
};

export const logout = () => async (dispatch) => {
  try {
    await axios.get("http://localhost:4000/api/v1/logout", {
      withCredentials: true, // Include cookies in the request
    });
    localStorage.removeItem("isAuthenticated", "false");
    dispatch({ type: LOGOUT_SUCCESS });
  } catch (error) {
    dispatch({
      type: LOGOUT_FAILURE,
      payload: error.response ? error.response.data.message : "Logout failed",
    });
  }
};

export const updateProfile = (userData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_PROFILE_REQUEST });
    const config = {
      headers: { "Content-Type": "multipart/form-data" },
      withCredentials: true,
    };
    const data = await axios.put(
      "http://localhost:4000/api/v1/me/update",
      userData,
      config
    );
    dispatch({ type: UPDATE_PROFILE_SUCCESS, payload: data.success });
  } catch (error) {
    if (error.response && error.response.data) {
      dispatch({
        type: UPDATE_PROFILE_FAILURE,
        payload: error.response.data.message,
      });
    } else {
      dispatch({
        type: UPDATE_PROFILE_FAILURE,
        payload: "Error loading user data",
      });
    }
  }
};

export const updatePassword = (password) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_PASSWORD_REQUEST });
    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };
    const data = await axios.put(
      "http://localhost:4000/api/v1/password/update",
      password,
      config
    );
    dispatch({ type: UPDATE_PASSWORD_SUCCESS, payload: data.success });
  } catch (error) {
    if (error.response && error.response.data) {
      dispatch({
        type: UPDATE_PASSWORD_FAILURE,
        payload: error.response.data.message,
      });
    } else {
      dispatch({
        type: UPDATE_PASSWORD_FAILURE,
        payload: "Error loading user data",
      });
    }
  }
};

export const forgetPassword = (email) => async (dispatch) => {
  try {
    dispatch({ type: FORGET_PASSWORD_REQUEST });
    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };
    const { data } = await axios.post(
      "http://localhost:4000/api/v1/password/forgot",
      { email },
      config 
    );

    dispatch({ type: FORGET_PASSWORD_SUCCESS, payload: data.user });
  } catch (error) {
    dispatch({
      type: FORGET_PASSWORD_FAILURE,
      payload: error.response.data.message,
    });
  }
};

export const resetPassword = (token,password) => async (dispatch) => {
    console.log("Token:", token);
console.log("Password:", password);

  try {
    dispatch({ type: RESET_PASSWORD_REQUEST });
    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };   
    const  data  = await axios.put(
      `http://localhost:4000/api/v1/password/reset/${token}`,
      password,
      config
    );
 
    dispatch({ type: RESET_PASSWORD_SUCCESS, payload: data.success });
  } catch (error) {
    // if (error.response && error.response.data) {
    //   dispatch({
    //     type: RESET_PASSWORD_FAILURE,
    //     payload: error.response.data.message,
    //   });
    // } else {
    //   dispatch({ type: RESET_PASSWORD_FAILURE, payload: "Error loading user data" });
    // }
    console.log(error)
  }
};
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
