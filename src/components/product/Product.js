import React, { useEffect, useState } from "react";
import "./ProductStyle.css";
import { useSelector } from "react-redux";

const Product = (props) => {
  const mal = props.productAc();

  const data = useSelector((state) => state[0]);
  console.log(data);

  return (
    <div className="product container">
      <div className="product-all">
        {data?.map((card) => {
          return (
            <div className="card" style={{ width: "18rem" }}>
              <img src={card.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text">{card.description}</p>
                <div className="btns ">
                  <button className="btn-primary">inc-</button>
                  <h5>1</h5>
                  <button className="btn-danger">dec+</button>
                  <div className="price">
                    <h5>Price :{card.price}$</h5>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Product;
