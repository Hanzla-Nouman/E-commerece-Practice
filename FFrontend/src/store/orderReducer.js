
import {CLEAR_ERRORS,CREATE_ORDER_REQUEST,CREATE_ORDER_SUCCESS,CREATE_ORDER_FAILURE} from "./actionTypes"
export const newOrderReducer = (state = {},action)=>{
    switch (action.type) {
        case CREATE_ORDER_REQUEST:
            return {
                loading: true,
               ...state,
            };
        case CREATE_ORDER_SUCCESS:
            return {
                loading: false,
                order: action.payload,
            };
        case CREATE_ORDER_FAILURE:
            return {
                loading: false,
                error: action.payload,
            };
        case CLEAR_ERRORS:
            return {
               ...state,
                error: null,
            };
        default:
            return state;
    }

}