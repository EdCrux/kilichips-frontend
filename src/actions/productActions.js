import axios from 'axios';

import { 
  PRODUCT_LIST_REQUEST, 
  PRODUCT_LIST_SUCCESS, 
  PRODUCT_LIST_FAIL, 
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL} from "../constants/productConstants"


export const listProducts = (category='') => async (dispatch) => {
  try {
    dispatch({type: PRODUCT_LIST_REQUEST});
    const { data } = await axios.get(`http://localhost:3000/api/v1/products?category=${category}`)
    dispatch({type: PRODUCT_LIST_SUCCESS, payload: data});
  }
  catch (error) {
    dispatch({type: PRODUCT_LIST_FAIL, payload: error.message})
  }
}

export const detailsProduct = (productId) => async (dispatch) => {
  try {
    dispatch({type: PRODUCT_DETAILS_REQUEST , payload: productId });
    const { data } = await axios.get(`http://localhost:3000/api/v1/products/${productId}`)

    dispatch({type: PRODUCT_DETAILS_SUCCESS , payload: data })
  }
  catch (error) {
    dispatch({type: PRODUCT_DETAILS_FAIL, payload: error.message})
  }
}