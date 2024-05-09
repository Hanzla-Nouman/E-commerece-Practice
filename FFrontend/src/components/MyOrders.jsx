import React ,{useEffect}from 'react'
import {useDispatch,useSelector} from "react-redux"
import { clearErrors, myOrders } from '../store/orderActions'

const MyOrders = () => {
    const dispatch = useDispatch()
    const {loading,error,orders} = useSelector(state => state.myOrderReducer)
    const {username,userId} = useSelector(state => state.userReducer)
    
    useEffect(() => {
       
    dispatch(myOrders())
      
    }, [])
    
  return (
    <>
   
    <h1 className='text-3xl font-bold text-center'>My orders</h1>
    <h1 className='text-3xl font-semibold text-center'>{username}</h1>
  
    </>
  )
}

export default MyOrders