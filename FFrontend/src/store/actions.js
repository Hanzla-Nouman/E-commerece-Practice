// actions.js
import axios from "axios";
import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
} from "./actionTypes";

export const fetchData = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_DATA_REQUEST });
    try {
      const response = await axios.get("api/v1/products");

      dispatch({ type: FETCH_DATA_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: FETCH_DATA_FAILURE, payload: error.message });
    }
  };
};
