import React from "react";
import ProductMain from "../components/ProductDetails/ProductMain";
import { Outlet } from "react-router-dom";

function ProductDetails() {
  return (
    <div>
      <ProductMain />
      <Outlet />
    </div>
  );
}

export default ProductDetails;