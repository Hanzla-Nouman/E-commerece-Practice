// reducer.js
import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
} from "./actionTypes";

const initialState = {
    data: {
        success: false,
        totalProducts: 0,
        productsCount: 0,
        products: []
    },
    error: null,
    loading: false,
   
 
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return { ...state,loading: true };
    case FETCH_DATA_SUCCESS:
      return { ...state, data: action.payload,loading: false };
    case FETCH_DATA_FAILURE:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default productReducer;
