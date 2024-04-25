import React from 'react'

const CartItemCard = ({item}) => {
  return (
      
    <div className='flex'>
         <img src={item.image} alt="" width={"70px"}/>
         {item.product} {item.price} {item.quantity}
         </div>
    
  )
}

export default CartItemCard