import axios from 'axios';
import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
} from '../constants/cartConstants';

export const addToCart = (productId, qty) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get(`http://localhost:3000/api/v1/products/${productId}`)

    dispatch({
      type: CART_ADD_ITEM, 
      payload: {
        product_id: data.id,
        name: data.name,
        image: data.images[0],
        price: data.price,
        countInStock: data.countInStock,
        qty
    }})

    const { cart: { cartItems }} = getState();
    Cookie.set('cartItems', JSON.stringify(cartItems));
  }
  catch (error) {

  }
}

export const removeFromCart = (productId) => (dispatch, getState) => {
  dispatch({type: CART_REMOVE_ITEM, payload: productId });

  const {cart: {cartItems}} = getState();
  Cookie.set('cartItems', JSON.stringify(cartItems));
}