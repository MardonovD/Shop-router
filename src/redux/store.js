import { createStore } from "redux";
import { ProductReducers } from "./reducers/ProductReducers";
import { initialState } from "./reducers/ProductReducers";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
const store = createStore(
  ProductReducers,
  initialState,
  applyMiddleware(thunk)
);
export default store;
