import React from 'react'
import CartItemCard from './CartItemCard'

const Cart = () => {
    const item={
       image:"https://static-01.daraz.pk/p/c9ac91adf74db1cd3b05d00b79d74e79.jpg", product:"Macbooks 16GB 2TB SSD 16 inches display Amoled Dispaly 7000 mah Battery Premium Quality 1 year Warranty",price:90,quantity:3
    }
  return (
    <>
    <div>
    <h1 className='text-3xl font-bold text-center m-3'>Shopping Cart</h1>
    <div className='m-4'>
    <div className='bg-slate-400 cart-header p-2  font-semibold'>
        <p>Product</p>
        <p>Price</p>
        <p style={{marginRight:"50px"}}>Quantity</p>
        <p style={{marginRight:"50px"}}>Subtotal</p>
    </div>
 <CartItemCard item={item}/>
 <CartItemCard item={item}/>
 <CartItemCard item={item}/>
 <CartItemCard item={item}/>
 <CartItemCard item={item}/>
    </div>
    </div>
    </>
  )
}

export default Cart