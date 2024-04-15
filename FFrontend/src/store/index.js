import {createStore,combineReducers,applyMiddleware} from "redux"
import productReducer, { productDetailsReducer } from "./productReducer";
import {thunk} from 'redux-thunk';
import { userReducer } from "./userReducer";

const rootReducer = combineReducers({
    productReducer: productReducer,
    productDetailsReducer:productDetailsReducer,
    userReducer: userReducer
  });

const store = createStore(rootReducer,applyMiddleware(thunk));

export default store