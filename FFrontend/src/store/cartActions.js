

import { ADD_TO_CART, REMOVE_ITEM_CART, SAVE_SHIPPING_INFO } from "./actionTypes";
import axios from "axios";


// export const addItemsToCart = (id, quantity,cartItems) => async (dispatch) => {
//   const { data } = await axios.get(`http://localhost:4000/api/v1/product/${id}`);
//   dispatch({
//     type: ADD_TO_CART,
//     payload: {
//       price: data.product.price,
//       product: data.product._id,
//       name: data.product.name,
//       image: data.product.images[0].url,
//       stock: data.product.stock,
//       quantity,
//     },
//   });

//   const updatedCartItems = [...cartItems, { 
//     price: data.product.price,
//     product: data.product._id,
//     name: data.product.name,
//     image: data.product.images[0].url,
//     stock: data.product.stock,
//     quantity,
//   }];

// if (localStorage.getItem("cartItems")) {
//   console.log(updatedCartItems,"updated")
//   let itemFromStorage = localStorage.getItem("cartItems");

//   // Parse the item if it exists
  
//     itemFromStorage = JSON.parse(itemFromStorage);
//     // Update the item as needed
//     itemFromStorage.quantity = quantity;
  
//     // Store the updated item back into localStorage
//     localStorage.setItem("cartItems", JSON.stringify(itemFromStorage));

// }else{
//   console.log("not presence")
//   localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
// }
// };





export const addItemsToCart = (id, quantity) => async (dispatch) => {
  const { data } = await axios.get(`http://localhost:4000/api/v1/product/${id}`);
  dispatch({
    type: ADD_TO_CART,
    payload: {
      price: data.product.price,
      product: data.product._id,
      name: data.product.name,
      image: data.product.images[0].url,
      stock: data.product.stock,
      quantity,
    },
  });

  let updatedCartItems;

  if (localStorage.getItem("cartItems")) {
    const cartItemsFromStorage = JSON.parse(localStorage.getItem("cartItems"));

    const existingItemIndex = cartItemsFromStorage.findIndex(item => item.product === data.product._id);

    if (existingItemIndex !== -1) {
      // If the item already exists in cartItems, update its quantity
      cartItemsFromStorage[existingItemIndex].quantity = quantity;
      updatedCartItems = cartItemsFromStorage;
    } else {
      // If the item doesn't exist in cartItems, add it to the array
      updatedCartItems = [...cartItemsFromStorage, {
        price: data.product.price,
        product: data.product._id,
        name: data.product.name,
        image: data.product.images[0].url,
        stock: data.product.stock,
        quantity,
      }];
    }
  } else {
    // If cartItems doesn't exist in localStorage, create it with the new item
    updatedCartItems = [{
      price: data.product.price,
      product: data.product._id,
      name: data.product.name,
      image: data.product.images[0].url,
      stock: data.product.stock,
      quantity,
    }];
  }

  localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
};


export const removeItemFromCart = (id)=>async(dispatch)=>{
  dispatch({
    type: REMOVE_ITEM_CART,
    payload: id
  })
  const cartItemsFromStorage = JSON.parse(localStorage.getItem("cartItems"));
  console.log(cartItemsFromStorage)
  const existingItemIndex = cartItemsFromStorage.findIndex(item => item.product === id);
  console.log(`${existingItemIndex}`)
  cartItemsFromStorage.splice(existingItemIndex, 1);
 localStorage.setItem("cartItems", JSON.stringify(cartItemsFromStorage))
  
}

export const saveShippingInfo = (data)=>async(dispatch)=>{
  dispatch({
    type: SAVE_SHIPPING_INFO,
    payload: data
  })
 localStorage.setItem("shippingInfo",JSON.stringify(data))
  
}