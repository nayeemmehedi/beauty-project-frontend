import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import QtyValue from "../../../common/QtyValue";

const ProductCard = ({ product, onAddToCart }) => {
  const [qty, setQty] = useState(1);
  const otpValue = localStorage.getItem("otp");

  let otp = JSON.parse(otpValue);

  const  navigate = useNavigate()
  const handleAddToCart = (e) => {
    e.preventDefault();
    onAddToCart({ ...product, qty: qty });
    if(!otp){
      navigate("/signup")
    }
  };

  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white flex flex-col h-full">
    <div className="py-2 flex-1 flex flex-col justify-between">
      <div>
        <div className="relative">
          <Link to={`/product-details/${product.id}`}>
            <img
              className="w-full h-64 object-cover cursor-pointer"
              src={product.imageUrl}
              alt={product.name}
              // onClick={handleProductClick}
            />
          </Link>
        </div>
        <div className="px-6 py-4">
          <Link to={`/product-details/${product.id}`}>
            <div className="font-bold text-xl mb-2 cursor-pointer">
              {product.name}
            </div>
          </Link>
          <div className="flex items-center mb-2">
            {Array(5)
              .fill()
              .map((_, index) => (
                <svg
                  key={index}
                  className={`h-4 w-4 fill-current ${
                    index < product.rating ? "text-yellow-500" : "text-gray-300"
                  }`}
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
          </div>
          <div className="flex justify-between items-center mb-4">
            <span className="text-lg font-bold text-gray-900">
              ৳ {product.price}
            </span>
            {product.weight && (
              <span className="text-gray-600">{product.weight}</span>
            )}
          </div>
        </div>
      </div>
      <div className="flex justify-between px-6 py-4">
        <div className="col-span-1">
          <QtyValue qty={qty} setQty={setQty}></QtyValue>
        </div>
        <div className="col-span-1">
          <button
            className="mainbg hover:bg-indigo-700 text-white font-bold text-xs py-2 px-2 rounded"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  </div>
  
  );
};

export default ProductCard;
