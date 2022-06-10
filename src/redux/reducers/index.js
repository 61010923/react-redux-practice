import { combineReducers } from "redux";
import {
  AddToCartReducer, loginReducer, productReducer, selectedProductReducer, SnackbarReducer,
} from "./ProductReducer";

export const reducers = combineReducers({
  allProducts: productReducer,
  product: selectedProductReducer,
  cart: AddToCartReducer,
  alert: SnackbarReducer,
  user: loginReducer,
});
