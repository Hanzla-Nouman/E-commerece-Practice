import { createStore, combineReducers, applyMiddleware } from "redux";
import { productReducer } from "./reducers/productReducer.js";
import {thunk} from "redux-thunk";

import { composeWithDevTools } from 'redux-devtools-extension';


const reducer = combineReducers({
    products: productReducer
});

let initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
