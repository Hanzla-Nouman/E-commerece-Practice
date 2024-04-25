import React from 'react'
import CartItemCard from './CartItemCard'

const Cart = () => {
    const item={
       image:"https://static-01.daraz.pk/p/c9ac91adf74db1cd3b05d00b79d74e79.jpg", product:"product",price:"90$",quantity:3
    }
  return (
    <>
    <div>
    <h1 className='text-3xl font-bold text-center m-3'>Shopping Cart</h1>
    <div className='m-3'>
    <div className='bg-slate-400 cart-header p-2  font-semibold'>
        <p>Products</p>
        <p>Price</p>
        <p>Quantity</p>
    </div>
 <CartItemCard item={item}/>
    </div>
    </div>
    </>
  )
}

export default Cart