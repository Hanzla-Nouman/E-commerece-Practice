import React from 'react'
import {Link} from "react-router-dom"

const OrderSuccess = () => {
  return (
    <>
         <div className="text-center" style={{margin:"100px"}} >
         
         <h1 className="mt-4 text-3xl font-bold text-slate-950 tracking-tight text-gray-900 sm:text-5xl">Congratulations!!!</h1>
         <br />
         <h1 className="mt-4 text-2xl font-bold tracking-tight text-gray-900 sm:text-5xl">Your Order has been Placed successfully </h1>
        <Link to="/orders">
           <button className="btn btn-primary btn-lg mt-8">View Orders</button>
           </Link>
         <div className="mt-10 flex items-center justify-center gap-x-6">
          
         </div>
       </div>
    </>
  )
}

export default OrderSuccess