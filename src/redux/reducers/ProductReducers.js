import { PRODUCTS } from "../actions/ProductAction";

export const initialState = { products: [] };

export const ProductReducers = (state = initialState, action) => {
  if (action.type === PRODUCTS) {
    return [...state.products, action.payload];
  }

  return state;
};
