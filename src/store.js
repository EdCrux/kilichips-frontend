//import Cookie from 'js-cookie';
import thunk from 'redux-thunk';
import { 
  createStore , 
  combineReducers, 
  applyMiddleware, 
  compose } from 'redux';

// Reducers
//import { cartReducer } from './reducers/cartReducers'; 
import { 
  productListReducer,
  productDetailsReducer
 } from './reducers/productReducers'; 
  //, 
  //productSaveReducer, 
  //productDeleteReducer,
  //productReviewSaveReducer } from './reducers/productReducers';
//import { 
  //userSigninReducer, 
  //userRegisterReducer } from './reducers/userReducers';
//import { 
  //orderCreateReducer, 
  //orderDetailsReducer, 
  //orderPayReducer } from './reducers/orderReducers';

//Initial State
//const cartItems = Cookie.getJSON('cartItems') || [];
//const userInfoparsed = JSON.parse(window.sessionStorage.getItem('userInfo'))
//const userInfo = userInfoparsed || null;

const initialState = { 
  //cart: { cartItems, shipping: {}, payment: {} },
  //userSignin: { userInfo }
};

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  //cart: cartReducer,
  //userSignin: userSigninReducer,
  //userRegister: userRegisterReducer,
  //productSave: productSaveReducer,
  //productDelete: productDeleteReducer,
  //productReviewSave: productReviewSaveReducer,
  //orderCreate: orderCreateReducer,
  //orderDetails: orderDetailsReducer,
  //orderPay: orderPayReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;