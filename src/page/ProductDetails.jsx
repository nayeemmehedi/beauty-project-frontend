import React from "react";
import ProductMain from "../components/ProductDetails/ProductMain";
import { Outlet, useParams } from "react-router-dom";
import { productDetailsDemo } from "../common/product";

function ProductDetails() {
  const { id } = useParams();

  const singleProduct = productDetailsDemo.filter((v, idx) => v.id == id);

  console.log("singleProduct", singleProduct);

  return (
    <div>
      <ProductMain product={singleProduct[0]} />
      <Outlet />
    </div>
  );
}

export default ProductDetails;
