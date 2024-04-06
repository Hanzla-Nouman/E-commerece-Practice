// import { createSlice } from "@reduxjs/toolkit";

// const productSlice = createSlice({
//   name: "product",
//   initialState: {},
//   reducers: {
//     ALL_PRODUCT_REQUEST: (state, action) => {
//       console.log("req");
//       return {
//         loading: true,
//         product: [],
//       };
//     },
//     ALL_PRODUCT_SUCCESS: (state, action) => {
//         console.log("success")
//         return{
//             loading: false,
//             products:action.payload.products,
//             productsCount:action.payload.productsCount
//         }
//     },
//   },
// });

// export const productActions = productSlice.actions;
// export default productSlice;

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
      return { ...state };
    case FETCH_DATA_SUCCESS:
      return { ...state, data: action.payload };
    case FETCH_DATA_FAILURE:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default productReducer;
