import { useNavigate } from "react-router";
import { LOGIN_SUCCESS,LOGIN_REQUEST,LOGIN_FAILURE,CLEAR_ERRORS, SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE, LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOAD_USER_FAILURE } from "./actionTypes";
import axios from "axios";

export const login=(email,password,navigate)=> async(dispatch)=>{
    
try {
    dispatch({type:LOGIN_REQUEST});
    const config = {headers:{"Content-Type":"application/json"}, withCredentials: true }
    const {data}= await axios.post('http://localhost:4000/api/v2/login',{email,password},config);
    
    navigate("/account");
    
    dispatch({type: LOGIN_SUCCESS, payload: data.user})
} catch (error) {
    dispatch({type: LOGIN_FAILURE,payload: error.response.data.message})
}
}

export const signup=(userData,navigate)=> async(dispatch)=>{
    
try {
   
    // console.log(userData.avatar)
    
    console.log("requesting...")
    dispatch({type: SIGNUP_REQUEST});
    const config = {headers:{"Content-Type":"multipart/form-data"}}
    const data= await axios.post('http://localhost:4000/api/v2/register',userData,config);
    console.log("successed")
    navigate("/account")
   
    dispatch({type: SIGNUP_SUCCESS, payload:data.user})
} catch (error) {
    console.log("error: " + error)
    dispatch({type: SIGNUP_FAILURE,payload: error.response.data.message}) 
}
}

export const loadUser = ()=> async(dispatch)=>{
    
    try {
        dispatch({type:LOAD_USER_REQUEST});
        const config = {headers:{"Content-Type":"application/json"}, withCredentials: true }
        console.log("aslamualikum")
        const {data}= await axios.get('http://localhost:4000/api/v2/me',config)
        console.log("success")
        console.log("data",data)
        dispatch({type: LOAD_USER_SUCCESS, payload: data.user})
    } catch (error) {
        dispatch({type: LOAD_USER_FAILURE,payload: error.response.data.message})
    }
    }


export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
