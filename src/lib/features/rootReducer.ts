import { combineReducers } from "redux";
import productReducer from "./products/productSlice";

export const rootReducer = combineReducers({
  product: productReducer,
});
