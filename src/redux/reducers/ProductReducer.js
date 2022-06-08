import { ActionTypes } from "../constants/ActionTypes";

const initialState = {
  products: [],
};
// eslint-disable-next-line default-param-last
export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return {
        ...state,
        products: payload,
      };
    default:
      return state;
  }
};
// eslint-disable-next-line default-param-last
export const selectedProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return {
        ...state, ...payload,
      };
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};

// eslint-disable-next-line default-param-last
export const AddToCartReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ActionTypes.ADD_PRODUCT_TO_CART:
      // eslint-disable-next-line no-case-declarations
      const exist = state.find((item) => item.id === payload.id);
      if (exist) {
        return state.map((item) => (item.id === payload.id
          ? { ...item, qty: item.qty + 1 }
          : item));
      }
      return [...state, { ...payload, qty: 1 }];
    case ActionTypes.REMOVE_PRODUCT_TO_CART:
      // eslint-disable-next-line no-case-declarations
      const existRemove = state.find((item) => item.id === payload.id);
      if (existRemove.qty === 1) {
        return state.filter((item) => item.id !== existRemove.id);
      }
      return state.map((item) => (item.id === payload.id
        ? { ...item, qty: item.qty - 1 } : item));
    case ActionTypes.REMOVE_PRODUCT:
      return state.filter((item) => item.id !== payload.id);
    case ActionTypes.REMOVE_PRODUCT_ALL:
      return [];
    default:
      return state;
  }
};
