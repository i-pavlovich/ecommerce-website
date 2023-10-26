import React from "react";

import "./Products.scss";
import Product from "../Product/Product";

const Products = () => {
  return (
    <div className="products-container">
      <div className="header">Heading</div>
      <div className="products">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
};

export default Products;
