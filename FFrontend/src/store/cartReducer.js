import { ADD_TO_CART } from "./actionTypes";

const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const item = action.payload;
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
      }
    default:
      return state;
  }
};
export default cartReducer;
