import {CLEAR_ERRORS, CREATE_ORDER_FAILURE, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS} from "./actionTypes"
import axios from "axios"
import { useDispatch } from "react-redux"

export const createOrder =(order)=>async(dispatch)=>{
    // const dispatch = useDispatch()
try {
    dispatch({type:CREATE_ORDER_REQUEST});
    const config = {
            headers:{
                "Content-Type": "application/json",withCredentials: true,
            }
    };
    const {data} = await axios.post("http://localhost:4000/api/v1/order/new",order,config)
    dispatch({type:CREATE_ORDER_SUCCESS, payload:data});

} catch (error) {
    dispatch({type:CREATE_ORDER_FAILURE, payload:error.response.data.message});
}
}

export const clearErrors = ()=>async(dispatch)=>{
    dispatch({type:CLEAR_ERRORS})
}