// actions.js
import axios from "axios";
import {
  ALL_PRODUCT_REQUEST,
  ALL_PRODUCT_SUCCESS,
  ALL_PRODUCT_FAILURE,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAILURE,
} from "./actionTypes";

export const fetchProduct = () => {  
  return async (dispatch) => {
    dispatch({ type: ALL_PRODUCT_REQUEST });
    try {
      const response = await axios.get("http://localhost:4000/api/v1/products");
      dispatch({ type: ALL_PRODUCT_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: ALL_PRODUCT_FAILURE, payload: error.message });
    }
  };
};

export const fetchProductDetails = () => {  
  return async (dispatch) => {
    dispatch({ type: PRODUCT_DETAILS_REQUEST });
    try {
      const data = await axios.get(`http://localhost:4000/api/v1/products/${id}`);
      dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data.product });
    } catch (error) {
      dispatch({ type: PRODUCT_DETAILS_FAILURE, payload: error.message });
    }
  };
};
