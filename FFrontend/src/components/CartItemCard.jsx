import React, { useEffect, useState } from "react";
import { addItemsToCart } from "../store/cartActions";
import { useDispatch,useSelector } from "react-redux";
const CartItemCard = ({ item }) => {

const { cartItems } = useSelector((state) => state.cartReducer);
// console.log(cartItems)
const dispatch = useDispatch()
  const decreaseQuantity = (id,quantity) => { 
    quantity = quantity - 1;
    dispatch(addItemsToCart(id,quantity,cartItems))
  };
  const increaseQuantity = (id,quantity,stock) => {
   quantity = quantity + 1;
    if (stock <= quantity) {
      return;
    }
    dispatch(addItemsToCart(id,quantity,cartItems))
  };

  return (
    <div className=" single-item-cart font-semibold mt-2 p-2  bg-slate-200 items-center" >
      <span className="flex ">
        <img src={item.image} alt="" width={"60px"} height={"60px"} />
        <p className="ml-2 text-left mr-2">
          <a href="" className="font-link">
            {item.name}
          </a> 
        </p>
      </span>
      <span className="ml-3">{`$${item.price}`}</span>
      <span>
        <div className="mt-2 mb-2" style={{ display: "flex" }}>
          <button
          disabled={item.quantity === 1}
            className="button-input-cart uni"
            onClick={()=>decreaseQuantity(item.product,item.quantity)}
          >
            <span className="material-symbols-outlined ">remove</span>
          </button>

          <input
            className=" bg-base-300 count-input-cart    "
            readOnly
            value={item.quantity}
          />

          <button
            className="button-input-cart font-black uni"
            onClick={()=>increaseQuantity(item.product,item.quantity,item.stock)}
          >
            <span className="material-symbols-outlined">add</span>
          </button>
        </div>
      </span>
      <span>${(item.price * item.quantity).toFixed(2)}</span>
      <span className="cross">
        <span className="material-symbols-outlined">delete</span>
      </span>
    </div>
  );
};

export default CartItemCard;
