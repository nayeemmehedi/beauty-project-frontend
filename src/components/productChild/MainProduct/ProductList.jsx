import React, { useState } from "react";
import ProductCard from "../ProductBox/ProductCard";
import useCartStore from "../../../store";
import { Pagination } from "antd";
import { productDetailsDemo } from "../../../common/product";



const ProductList = () => {
  const addToCart = useCartStore((state) => state.addToCart);

  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("");

  const handleAddToCart = (product) => {
    console.log("product add hyr jaiga",product)
    addToCart(product);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSort = (event) => {
    setSortOption(event.target.value);
  };

  const filteredProducts = productDetailsDemo.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedProducts = filteredProducts.sort((a, b) => {
    if (sortOption === "popularity") {
      return b.popularity - a.popularity;
    } else if (sortOption === "priceHighToLow") {
      return b.price - a.price;
    } else {
      return 0;
    }
  });

  const cart = useCartStore((state) => state.cart);

  console.log("cart", cart);

  return (
    <div className="w-[85%] mx-auto my-3">
      <div className="flex justify-between mb-4">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={handleSearch}
          className="py-2 px-4 border border-gray-300 rounded-lg w-1/2"
        />
        <div className="relative">
          <select
            value={sortOption}
            onChange={handleSort}
            className="py-2 px-4 border border-gray-300 rounded-lg appearance-none"
          >
            <option value="">Sort by</option>
            <option value="popularity">Popularity</option>
            <option value="priceHighToLow">Price: High to Low</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {sortedProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>

      <div className="grid justify-center my-10">
        <Pagination
          className="custom-pagination"
          defaultCurrent={1}
          total={50}
        />
        ;
      </div>
    </div>
  );
};

export default ProductList;
