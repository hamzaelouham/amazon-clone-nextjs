import React from "react";
import ReactDom from "react-dom";
import App from "./App";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducers from "./redux/state";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import "./index.css";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const initialState = {
  cart: {
    cartItems: localStorage.getItem("basket")
      ? JSON.parse(localStorage.getItem("basket"))
      : [],
  },
};
const store = createStore(
  rootReducers,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

ReactDom.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,

  document.getElementById("root")
);
//auth: {
// loggedIn: localStorage.getItem("token") ? true : false,
//},
