import { CLEAR_ERRORS, LOGIN_FAILURE,LOGIN_REQUEST,LOGIN_SUCCESS,SIGNUP_FAILURE,SIGNUP_SUCCESS,SIGNUP_REQUEST, LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOAD_USER_FAILURE } from "./actionTypes"

export const userReducer = (
    state = { user: null},
    action
  ) => {
    
      
    switch(action.type){

        case LOGIN_REQUEST:
            case SIGNUP_REQUEST:
            case LOAD_USER_REQUEST:
              
            return{
                loading: true,
                isAuthenticated:false
            };
        case LOGIN_SUCCESS:
        case SIGNUP_SUCCESS:
        case LOAD_USER_SUCCESS:

            
            return{
                ...state,
                loading: false,
                isAuthenticated:true,
                user:action.payload,
                userRole: action.payload.role
                
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
            case LOAD_USER_FAILURE:
                return {
                    ...state,
                loading: false,
                isAuthenticated:false,
                user:null,
                error: action.payload
            }
        case CLEAR_ERRORS:
            return{
                ...state,
                error: null
            };
            default:
                return state
    }
  }