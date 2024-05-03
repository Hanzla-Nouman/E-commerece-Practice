import { ADD_TO_CART,REMOVE_ITEM_CART } from "./actionTypes";

const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const item = action.payload;
      console.log(state.cartItems)
      const existItem = state.cartItems.find((i) => i.product === item.product);
      if (existItem) {
        const cartItems = state.cartItems.map((i) =>
          i.product === existItem.product ? item : i
        );
        return {
          ...state,
          cartItems: state.cartItems.map((i) =>
            i.product === existItem.product ? item : i
          ),
        };
      } else {
        const cartItems = [...state.cartItems, item];
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }case REMOVE_ITEM_CART:
      const cartItems = [...state.cartItems];

      return{
        ...state,cartItems:cartItems.filter((i)=>i.product !== action.payload)
      }
    default:
      return state;
  }
};
export default cartReducer;
