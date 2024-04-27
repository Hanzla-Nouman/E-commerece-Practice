import { ADD_TO_CART } from "./actionTypes"; 
import axios from "axios";       

export const addItemsToCart = (id, quantity) => async (dispatch, getState) => {
  const {data} = await axios.get(`http://localhost:4000/api/v1/product/${id}`);

  dispatch({   
    type: ADD_TO_CART,       
    payload: {      
      price: data.product.price,    
      product: data.product._id,     
      name: data.product.name,       
      image: data.product.images[0].url, 
      stock: data.product.Stock,
      quantity,
    },
  });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};
