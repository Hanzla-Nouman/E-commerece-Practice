import {
  ALL_PRODUCT_FAIL,
  ALL_PRODUCT_SUCCESS,
  ALL_PRODUCT_REQUEST,
  CLEAR_ERRORS,
} from "../constants/productContants";

export const productReducer = (state =  {products: []} , action) => {
    switch(action.type){

        case ALL_PRODUCT_REQUEST:
            console.log("req") 
            return{
                loading: true,
                product:[]
            }
            
        case ALL_PRODUCT_SUCCESS:
            console.log("success")
            return{ 
                loading: false,
                products:action.payload.products,
                productsCount:action.payload.productsCount
            }
        case ALL_PRODUCT_FAIL:
            console.log("fail")
            return{
                loading: false,
                error:action.payload
            }
        case CLEAR_ERRORS:
            return{
               ...state,
               error: null
            }
        default:
            return state;
    }
};
