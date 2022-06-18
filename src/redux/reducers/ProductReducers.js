import { PRODUCTS } from "../actions/ProductAction";

export const initialState = { products: [] };

export const ProductReducers = (state = initialState, action) => {
  if (action.type === PRODUCTS) {
    return [...state, action.payload];
  }

  return state;
};
