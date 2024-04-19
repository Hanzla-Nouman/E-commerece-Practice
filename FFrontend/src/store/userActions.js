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
      "http://localhost:4000/api/v2/login",
      { email, password },
      config
    );
    localStorage.setItem("isAuthenticated", "true");

    navigate("/account");

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
      "http://localhost:4000/api/v2/register",
      userData,
      config
    );
    localStorage.setItem("isAuthenticated", "true");
    navigate("/account");
    // window.location.reload();

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

    const { data } = await axios.get("http://localhost:4000/api/v2/me", config);

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
    await axios.get("http://localhost:4000/api/v2/logout", {
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
        "http://localhost:4000/api/v2/me/update",
        userData,
        config
      );
     

  
      dispatch({ type: UPDATE_PROFILE_SUCCESS, payload: data.user });
    } catch (error) {
      if (error.response && error.response.data) {
        dispatch({
          type: UPDATE_PROFILE_FAILURE,
          payload: error.response.data.message,
        });
      } else {
        dispatch({ type: UPDATE_PROFILE_FAILURE, payload: "Error loading user data" });
      }
    }
  };

export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
