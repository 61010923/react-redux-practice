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
export const addProductToCart = (product) => ({
  type: ActionTypes.ADD_PRODUCT_TO_CART,
  payload: product,
});
export const removeProductToCart = (product) => ({
  type: ActionTypes.REMOVE_PRODUCT_TO_CART,
  payload: product,
});
export const removeProduct = (product) => ({
  type: ActionTypes.REMOVE_PRODUCT,
  payload: product,
});
export const removeAll = () => ({
  type: ActionTypes.REMOVE_PRODUCT_ALL,
});
