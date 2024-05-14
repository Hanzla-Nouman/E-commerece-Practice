import {CLEAR_ERRORS, CREATE_ORDER_FAILURE, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, MY_ORDERS_FAILURE, MY_ORDERS_REQUEST, MY_ORDERS_SUCCESS,ORDER_DETAIL_FAILURE,ORDER_DETAIL_SUCCESS,ORDER_DETAIL_REQUEST} from "./actionTypes"
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
export const myOrders =(id)=>async(dispatch)=>{ 
    console.log(id,"at myOrders")
try {           
    dispatch({type:MY_ORDERS_REQUEST});   
    
    const {data} = await axios.get("http://localhost:4000/api/v1/ordersme",
    { 
        headers: {
        'Authorization': ` Tokenhere ${id} `,
        'Content-Type': 'application/json',
        'User-Id': id
        // Adding user ID to headers
        // add other headers as needed 
      }
    }
) 
    dispatch({type:MY_ORDERS_SUCCESS, payload:data.orders});

} catch (error) {
    dispatch({type:MY_ORDERS_FAILURE, payload:error.response.data.message});
}
} 
export const getOrdersDetails =(id)=>async(dispatch)=>{ 
try {           
    dispatch({type:ORDER_DETAIL_REQUEST});   
    
    const {data} = await axios.get(`http://localhost:4000/api/v1/order/${id}`) 
    dispatch({type:ORDER_DETAIL_SUCCESS, payload:data.order});

} catch (error) {
    dispatch({type:ORDER_DETAIL_FAILURE, payload:error.response.data.message});
}
} 

export const clearErrors = ()=>async(dispatch)=>{
    dispatch({type:CLEAR_ERRORS})
}