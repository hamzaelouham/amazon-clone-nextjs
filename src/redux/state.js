import { combineReducers } from "redux";
import productReduce from "../redux/reduces/productReduce";
import cartReducer from "../redux/reduces/cartReducer";
import countryReducer from "../redux/reduces/countryReducer";
import authReducer from "../redux/reduces/authReducer";
import { registerReducer } from "../redux/reduces/authReducer";

const rootReducers = combineReducers({
  products: productReduce,
  cart: cartReducer,
  country: countryReducer,
  auth: authReducer,
  register: registerReducer,
});

export default rootReducers;
