import React, { useState } from "react";
import Recommended from "./Recommended";

const ProductInfo = ({ product }) => {
  const [mainImageIndex, setMainImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const handleImageClick = (index) => {
    setMainImageIndex(index);
  };

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value, 10);
    setQuantity(isNaN(newQuantity) || newQuantity < 1 ? 1 : newQuantity);
  };

  const renderThumbnails = () => {
    return (
      <div className="flex flex-col justify-start mt-4">
        {product.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            className={`w-16 h-16 rounded-lg shadow-md mb-2 cursor-pointer ${
              mainImageIndex === index ? "border-2 border-indigo-500" : ""
            }`}
            onClick={() => handleImageClick(index)}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="mt-16">
      <div className="bg-[#f6f6f8] p-4 font-light text-sm">
        <p>
          Home {">"} Skin {">"} Shop By Concern{" "}
        </p>
      </div>

      <div className="grid grid-cols-4">
        <div className="col-span-3">
          <div className=" mx-auto py-8 ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex">
                <div className="mx-4">{renderThumbnails()}</div>
                <div className="relative w-full">
                  <div className="w-full h-[300px]">
                    <img
                      src={product.images[mainImageIndex]}
                      alt={product.name}
                      className="w-full h-full object-cover rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              </div>

              <div className="ms-3">
                <p className="text-2xl font-bold mb-4 playfair-display-700">
                  {product.name}
                </p>
                <p>({product.weight})</p>

                {/* <p className="text-gray-700 mb-4">{product.description}</p> */}
                <div className="my-4">
                  <span className="text-2xl font-bold maintext">
                    ${product.price.toFixed(2)}
                  </span>
                  {product.discountedPrice && (
                    <span className="text-gray-500 line-through ml-2">
                      ${product.originalPrice.toFixed(2)}
                    </span>
                  )}

                  <div className="my-4 text-[#9C27B0]">Save ৳53 (15% off)</div>
                </div>

                <div className="my-5">
                  <div className="bg-[#fce9ff] rounded-lg flex p-2 w-[70%]">
                    <div className="playfair-display  bg-[#9C27B0] rounded-xl px-2 text-white text-sm ">
                      No #10 Best Seller{" "}
                    </div>
                    <div className="ms-2">
                      in{" "}
                      <span className="text-[#9C27B0] font-bold">
                        Masks & Peels
                      </span>
                    </div>
                  </div>
                  <p className="my-4 font-extralight text-sm">
                    {" "}
                    Rating :{" "}
                    <span className="text-[#4a1c53]"> {product.rating}</span> /
                    5
                  </p>
                </div>

                <div className="flex items-center mb-4">
                  <label htmlFor="quantity" className="mr-2">
                    Quantity:
                  </label>
                  <input
                    type="number"
                    id="quantity"
                    min="1"
                    value={quantity}
                    onChange={handleQuantityChange}
                    className="w-16 py-1 px-2 border border-gray-300 rounded-md text-center"
                  />
                </div>

                <button className="mainbg hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
                  Add to Cart
                </button>

                <div className="my-4 ">
                  <div className="rounded bg-[#F5F5F5] p-3 me-7  font-extralight">
                    {" "}
                    {product.howToUse}
                  </div>
                </div>
                <div className="me-7">
                  <p className="mt-2 font-light">SKU: 10873</p>
                  <p className="mt-2 font-light">
                    Categories: Free Delivery, Top Selling, Face, Pigmentation,
                    Acne Treatment, Masks & Peels, Masks & Peels, Shop By
                    Concern, Skin, Natural
                  </p>
                  <p className="mt-2 font-light">Tags: app_best_seller, FMCG</p>
                  <p className="mt-2 font-light">Brand: Rajkonna</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <Recommended></Recommended>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
