import React from "react";
import InitialBar from "../components/Home/InitialBar";
import Experience from "../components/Home/Experience";
import ProductCard from "../components/productChild/ProductBox/ProductCard";

const products = [
  {
    id: 1,
    name: "Product 1",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLfZbdLIYu6a57W8xYChY132vgPTmRXrq5rw&s",
    rating: 4,
    price: 19.99,
    weight: { value: 500, unit: "g" },
    popularity: 10,
  },
  {
    id: 2,
    name: "Product 2",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYvwg8SWEO_RnUGBu58DfM5-_s4kYIYFJq4Q&s",
    rating: 3,
    price: 24.99,
    popularity: 8,
  },
  {
    id: 3,
    name: "Product 3",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLfZbdLIYu6a57W8xYChY132vgPTmRXrq5rw&s",
    rating: 4.3,
    price: 23.99,
    weight: { value: 500, unit: "g" },
    popularity: 20,
  },
];
function Home() {
  const handleAddToCart = (product) => {
    console.log(`Adding ${product.name} to cart`);
  };

  return (
    <div>
      <InitialBar></InitialBar>
      <Experience></Experience>
      <div className="w-[80%] mx-auto my-6">
        <p className="my-5 font-bold playfair-display-700">Latest product :</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
