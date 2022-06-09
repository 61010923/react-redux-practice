import { combineReducers } from "redux";
import {
  AddToCartReducer, productReducer, selectedProductReducer, SnackbarReducer,
} from "./ProductReducer";

export const reducers = combineReducers({
  allProducts: productReducer,
  product: selectedProductReducer,
  cart: AddToCartReducer,
  alert: SnackbarReducer,
});
