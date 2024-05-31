import React from "react";
import InitialBar from "../components/Home/InitialBar";
import Experience from "../components/Home/Experience";
import ProductCard from "../components/productChild/ProductBox/ProductCard";
import HomeSlider from "../components/Home/HomeSlider";
import useCartStore from "../store";
import { productDetailsDemo } from "../common/product";
import { useNavigate } from "react-router-dom";

function Home() {
  const addToCart = useCartStore((state) => state.addToCart);

  const navigate = useNavigate();

  const otpValue = localStorage.getItem("otp");

  let otp = JSON.parse(otpValue);

  const handleAddToCart = (product) => {
    addToCart(product);
    if (!otp) {
      navigate("/signup");
    }
  };

  return (
    <div className="mt-16">
      <HomeSlider></HomeSlider>
      <InitialBar></InitialBar>
      <div className="my-5 py-5 w-[80%] mx-auto">
        <img
          src="https://shop.shajgoj.com/wp-content/uploads/2024/05/Beauty-Bargains-GIF.gif"
          alt=""
        />
      </div>
      <Experience></Experience>
      <div className="w-[80%] mx-auto my-6">
        <p className="my-5 font-bold playfair-display-700">Latest product :</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {productDetailsDemo.map((product) => (
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
