import {createStore,combineReducers,applyMiddleware} from "redux"
import productReducer from "./product";
import {thunk} from 'redux-thunk';

const rootReducer = combineReducers({
    productReducer: productReducer
  });

const store = createStore(rootReducer,applyMiddleware(thunk));

export default store