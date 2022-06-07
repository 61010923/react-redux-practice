import { ActionTypes } from "../constants/ActionTypes";

export const setProducts = (products) => ({
  type: ActionTypes.SET_PRODUCTS,
  payload: products,
});

export const selectedProduct = (product) => ({
  type: ActionTypes.SELECTED_PRODUCT,
  payload: product,
});
export const removeSelectedProduct = () => ({
  type: ActionTypes.REMOVE_SELECTED_PRODUCT,
});
export const addProductToCard = (product) => ({
  type: ActionTypes.ADD_PRODUCT_TO_CARD,
  payload: product,
});
