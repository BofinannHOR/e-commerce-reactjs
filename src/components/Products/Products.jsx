import React, { Fragment } from "react";
import ProductInStock from "./ProductInStock";
import ProductSum from "./ProductSum";

const Products = () => {
  return (
    <Fragment>
      <ProductSum />
      <ProductInStock />
    </Fragment>
  );
};

export default Products;
