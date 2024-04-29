import { ADD_TO_CART } from "./actionTypes"; 
import axios from "axios";      

// export const addItemsToCart = (id, quantity,cartItems) => async (dispatch) => {
//   const {data} = await axios.get(`http://localhost:4000/api/v1/product/${id}`);
//   console.log("cartAction",cartItems)
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
//   localStorage.setItem("cartItems", JSON.stringify([...cartItems]));
// };
export const addItemsToCart = (id, quantity, cartItems) => async (dispatch) => {
  const { data } = await axios.get(`http://localhost:4000/api/v1/product/${id}`);
  console.log("cartAction", cartItems);
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

  // Update local storage after updating Redux state
  const updatedCartItems = [...cartItems, { 
    price: data.product.price,
    product: data.product._id,
    name: data.product.name,
    image: data.product.images[0].url,
    stock: data.product.stock,
    quantity,
  }];
  localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
};
