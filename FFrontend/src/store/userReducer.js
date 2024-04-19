import {
  CLEAR_ERRORS,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  SIGNUP_FAILURE,
  SIGNUP_SUCCESS,
  SIGNUP_REQUEST,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAILURE,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_RESET,
  UPDATE_PROFILE_FAILURE,

} from "./actionTypes";

export const userReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
    case SIGNUP_REQUEST:
    case LOAD_USER_REQUEST:
      return {
        loading: true,
        isAuthenticated: false,
      };
    case LOGIN_SUCCESS:
    case SIGNUP_SUCCESS:
    case LOAD_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        user: action.payload,
        userRole: action.payload.role,

        // avatar: action.payload.avatar
      };
    case LOGIN_FAILURE:
    case SIGNUP_FAILURE:
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        user: null,
        error: action.payload,
      };
    case LOAD_USER_FAILURE:
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        user: null,
        error: action.payload,
      };
    case LOGOUT_SUCCESS:
      return {
        loading: false,
        user: {},
        isAuthenticated: false,
        error: null,
      };
    case LOGOUT_FAILURE:
      return {
        ...state,
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
};

export const profileReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_PROFILE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        isUpdated: action.payload
      };
    case UPDATE_PROFILE_RESET:
      return {
        ...state,
        isUpdated: false
      };
    case UPDATE_PROFILE_FAILURE:
      return {
        ...state,
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
};