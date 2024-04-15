import { LOGIN_SUCCESS,LOGIN_REQUEST,LOGIN_FAILURE,CLEAR_ERRORS } from "./actionTypes";
import axios from "axios";

export const login=(email,password)=> async(dispatch)=>{
try {
    dispatch({type:LOGIN_REQUEST});
    const config = {headers:{"Content-Type":"application/json"}}
    const {data}= await axios.post('api/v2/login',{email,password},config);
    
    dispatch({type: LOGIN_SUCCESS, payload:data.user})
} catch (error) {
    dispatch({type: LOGIN_FAILURE,payload: error.response.data.message})
}
}

export const clearErrors = ()=> async(dispatch)=>{
  dispatch({type:CLEAR_ERRORS})
}