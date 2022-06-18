import React, { useEffect } from "react";
import axiosFunction from "../api/Api";
import { productAc } from "../../redux/actions/ProductAction";
const Product = (props) => {
  const data = axiosFunction("products");

  useEffect(() => {
    props.productAc(data.data);
  }, []);

  return (
    <div className="product">
      <h1>Product</h1>
    </div>
  );
};

export default Product;
