import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import productReducer, { productDetailsReducer } from "./productReducer";
import {
  userReducer,
  profileReducer,
  forgetPasswordReducer,
} from "./userReducer";
import cartReducer from "./cartReducer";
import { myOrderReducer, newOrderReducer, orderDetailReducer } from "./orderReducer";

const rootReducer = combineReducers({
  productReducer: productReducer,
  productDetailsReducer: productDetailsReducer,
  userReducer: userReducer,
  profileReducer: profileReducer,
  forgetPasswordReducer: forgetPasswordReducer,
  cartReducer: cartReducer,
  newOrderReducer: newOrderReducer,
  myOrderReducer: myOrderReducer,
  orderDetailReducer: orderDetailReducer,
});

let initialState = {
  cartReducer: {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
    shippingInfo: localStorage.getItem("shippingInfo")
      ? JSON.parse(localStorage.getItem("shippingInfo"))
      : {},
  },
};

const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

export default store;
