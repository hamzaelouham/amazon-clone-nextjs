// import { createStore, applyMiddleware, compose } from "redux";
// import thunk from "redux-thunk";
// import { combineReducers } from "redux";
// import productReduce from "./reduces/productReduce";
// import cartReducer from "./reduces/cartReducer";
// import countryReducer from "./reduces/countryReducer";
// import authReducer from "./reduces/authReducer";
// import { registerReducer } from "./reduces/authReducer";

// const rootReducers = combineReducers({
//   products: productReduce,
//   cart: cartReducer,
//   country: countryReducer,
//   auth: authReducer,
//   register: registerReducer,
// });

// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const initialState = {
//   cart: {
//     cartItems: localStorage.getItem("basket")
//       ? JSON.parse(localStorage.getItem("basket"))
//       : [],
//   },
// };

// const store = createStore(
//   rootReducers,
//   initialState,
//   composeEnhancer(applyMiddleware(thunk))
// );

// export default store;

import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {},
});

export default store;
