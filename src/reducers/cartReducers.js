import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM
} from '../constants/cartConstants';

export const cartReducer = (state={ cartItems: []}, action) => {
  switch(action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;
      const product = state.cartItems.find(x => x.product_id === item.product_id)

      if(product) {
        return {
          cartItems: 
            state.cartItems.map(x => x.product_id === product.product_id ? item : x)
        }
      }

      return { cartItems: [...state.cartItems, item] }
    case CART_REMOVE_ITEM:
      return {...state, shippin: action.payload }
    
    default: 
      return state
  }
}