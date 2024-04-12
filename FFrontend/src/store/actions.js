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

export const fetchProduct = (currentPage = 1,result = "") => {  
  return async (dispatch) => {

    try {
    dispatch({ type: ALL_PRODUCT_REQUEST });
    let link = `http://localhost:4000/api/v1/products?&page=${currentPage}&keyword=${result}`
   
      const response = await axios.get(link);
      dispatch({ type: ALL_PRODUCT_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: ALL_PRODUCT_FAILURE, payload: error.message });
    }
  };
};

export const fetchProductDetails = (id) => {  
  return async (dispatch) => {
    dispatch({ type: PRODUCT_DETAILS_REQUEST });
    try {
      const response = await axios.get(`http://localhost:4000/api/v1/product/${id}`);
      dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: PRODUCT_DETAILS_FAILURE, payload: error.message });
    }
  };
};
