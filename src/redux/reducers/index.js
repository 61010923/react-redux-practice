import { combineReducers } from "redux";
import { AddToCardReducer, productReducer, selectedProductReducer } from "./ProductReducer";

export const reducers = combineReducers({
  allProducts: productReducer,
  product: selectedProductReducer,
  card: AddToCardReducer,
});
