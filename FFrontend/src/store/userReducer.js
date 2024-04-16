import { CLEAR_ERRORS, LOGIN_FAILURE,LOGIN_REQUEST,LOGIN_SUCCESS,SIGNUP_FAILURE,SIGNUP_SUCCESS,SIGNUP_REQUEST } from "./actionTypes"

export const userReducer = (
    state = { user: []},
    action
  ) => {
    
    switch(action.type){
        case LOGIN_REQUEST:
            case SIGNUP_REQUEST:
            return{
                loading: true,
                isAuthenticated:false
            };
        case LOGIN_SUCCESS:
        case SIGNUP_SUCCESS:
            return{
                ...state,
                loading: false,
                isAuthenticated:true,
                user:action.payload,
                // avatar: action.payload.avatar
            };
        case LOGIN_FAILURE:
        case SIGNUP_FAILURE:
            return{
                ...state,
                loading: false,
                isAuthenticated:false,
                user:null,
                error: action.payload
            };
        case CLEAR_ERRORS:
            return{
                ...state,
                error: null
            };
            default:
                return state
    }
  }