import {createStore,combineReducers,applyMiddleware} from "redux"
import {thunk} from 'redux-thunk';
import productReducer, { productDetailsReducer } from "./productReducer";
import { userReducer,profileReducer } from "./userReducer";

const rootReducer = combineReducers({
    productReducer: productReducer,
    productDetailsReducer:productDetailsReducer,
    userReducer: userReducer,
    profileReducer: profileReducer
  });

const store = createStore(rootReducer,applyMiddleware(thunk));

export default store