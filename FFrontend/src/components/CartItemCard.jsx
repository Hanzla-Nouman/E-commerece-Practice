import React, { useEffect, useState } from "react";
const CartItemCard = ({ item }) => {
  const [totalItems, setTotalItems] = useState(item.quantity);
  const decreaseQuantity = () => { 
    setTotalItems((total) => total - 1);
  };
  const increaseQuantity = () => {
    setTotalItems((total) => total + 1);
  };

  return (
    <div className=" single-item-cart font-semibold mt-2 p-2  bg-slate-200 items-center">
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
            disabled={totalItems === 1}
            className="button-input-cart uni"
            onClick={decreaseQuantity}
          >
            <span className="material-symbols-outlined ">remove</span>
          </button>

          <input
            className=" bg-base-300 count-input-cart    "
            readOnly
            value={totalItems}
          />

          <button
            className="button-input-cart font-black uni"
            onClick={increaseQuantity}
          >
            <span className="material-symbols-outlined">add</span>
          </button>
        </div>
      </span>
      <span>${item.price * totalItems}</span>
      <span className="cross">
        <span className="material-symbols-outlined">delete</span>
      </span>
    </div>
  );
};

export default CartItemCard;
