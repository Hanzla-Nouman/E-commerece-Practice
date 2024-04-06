import axios from "axios";
import {
  ALL_PRODUCT_FAIL,
  ALL_PRODUCT_SUCCESS,
  ALL_PRODUCT_REQUEST, 
  CLEAR_ERRORS,
} from "../constants/productContants";

export const getAllProduct = () => async (dispatch) => {
    try {
      dispatch({ type: ALL_PRODUCT_REQUEST });
      const {data}  = await axios.get("/api/v1/products");
      console.log(data);
      dispatch({ type: ALL_PRODUCT_SUCCESS, payload: data });
    } catch (error) {
      console.error("Error fetching products:", error);
      dispatch({ type: ALL_PRODUCT_FAIL, payload: error.message || "Failed to fetch products" });
    }
  };
  

export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
