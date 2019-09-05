import { combineReducers } from "redux";

// import all reducers
import user from "./user";
import product from "./product";
import cart from "./cart";

const appReducer = combineReducers({
  user,
  product,
  cart
});

export default appReducer;
