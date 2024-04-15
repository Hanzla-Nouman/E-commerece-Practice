
import {
  LOGIN_SUCCESS,
  LOGIN_REQUEST,
  LOGIN_FAILURE,
  CLEAR_ERRORS,
} from "./actionTypes";
import axios from "axios";

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });
    const config = { headers: { "Content-Type": "application/json" } };
    const  data  = await axios.post(
      "http://localhost:4000/api/v2/login",
      { email, password },
      config
    );

    // Assuming data has a user property. Adjust this if necessary.
    dispatch({ type: LOGIN_SUCCESS, payload: data.user });
  } catch (error) {
    // Log the full error object to see its structure
    console.error("Login Error:", error);

    // Check if error.response and error.response.data exist before accessing message
    let errorMessage;
    if (error.response) {
      if (error.response.status === 401) {
        errorMessage = "Invalid email or password";
      } else {
        errorMessage = error.response.data.message || "An error occurred";
      }
    } else {
      errorMessage = "Network error";
    }
    dispatch({ type: LOGIN_FAILURE, payload: errorMessage });
  }
};

export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
