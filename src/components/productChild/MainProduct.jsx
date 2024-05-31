import React from "react";
import ProductList from "./MainProduct/ProductList";
import SearchBar from "./MainProduct/SearchBar";
import Categories from "./MainProduct/Categories";

function MainProduct() {
  return (
    <div className="mt-5">
      <div className="grid sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-4">
        <div className="col-span-1 border-e-0 lg:border-e-2">
          <div className="w-[80%] ms-auto ">
            <SearchBar></SearchBar>
            <Categories></Categories>
          </div>
        </div>
        <div className="col-span-3">
          <ProductList></ProductList>

        </div>
      </div>
    </div>
  );
}

export default MainProduct;
