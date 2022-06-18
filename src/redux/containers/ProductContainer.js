import { connect } from "react-redux";
import Product from "../../components/product/Product";
import { productAc } from "../actions/ProductAction";

const getMySate = (state) => {
  return state;
};

export const ProductContainer = connect(getMySate, { productAc })(Product);
