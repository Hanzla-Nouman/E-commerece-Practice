import {createStore,combineReducers,applyMiddleware} from "redux"
import productReducer, { productDetailsReducer } from "./productReducer";
import {thunk} from 'redux-thunk';

const rootReducer = combineReducers({
    productReducer: productReducer,
    productDetailsReducer:productDetailsReducer
  });

const store = createStore(rootReducer,applyMiddleware(thunk));

export default store