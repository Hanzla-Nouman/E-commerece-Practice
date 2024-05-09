import {CLEAR_ERRORS, CREATE_ORDER_FAILURE, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, MY_ORDERS_FAILURE, MY_ORDERS_REQUEST, MY_ORDERS_SUCCESS} from "./actionTypes"
import axios from "axios"

export const createOrder =(order)=>async(dispatch)=>{
try {           
    dispatch({type:CREATE_ORDER_REQUEST}) ;
    const config = {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      };
    const {data} = await axios.post("http://localhost:4000/api/v1/order/new",order,config)
    dispatch({type:CREATE_ORDER_SUCCESS, payload:data});

} catch (error) {
    dispatch({type:CREATE_ORDER_FAILURE, payload:error.response.data.message});
} 
}
export const myOrders =()=>async(dispatch)=>{
try {           
    dispatch({type:MY_ORDERS_REQUEST});  
    
    const {data} = await axios.get("http://localhost:4000/api/v1/ordersme")
    dispatch({type:MY_ORDERS_SUCCESS, payload:data.orders});

} catch (error) {
    dispatch({type:MY_ORDERS_FAILURE, payload:error.response.data.message});
}
} 

export const clearErrors = ()=>async(dispatch)=>{
    dispatch({type:CLEAR_ERRORS})
}