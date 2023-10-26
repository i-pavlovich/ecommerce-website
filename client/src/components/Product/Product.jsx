import React from "react";

import "./Product.scss";
import product from "../../assets/hero.png";

const Product = () => {
  return (
    <div className="product-card">
      <div className="thumbnail">
        <img src={product} alt="" />
      </div>
      <div className="product-details">
        <span className="name">Prodct name</span>
        <span className="price">Some price</span>
      </div>
    </div>
  );
};

export default Product;
