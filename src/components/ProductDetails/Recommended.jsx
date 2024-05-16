import React from "react";

export const products = [
  {
    name: "Rajkonna 100% Natural & Organic Red Sandalwood Powder",
    howToUse:
      "Hundreds of funnel absorb liquid faster and give instant dry feel. Its pleasant fragrance fights to lock odour in 240mm pad. Six wall protection prevents leakage. Converts liquid into gel and locks it inside. This pad is skin friendly and individual pouch make easy to carry and disposal for users.",
    description: "This is a sample product description.",
    price: 19.99,
    weight: "25gm",
    originalPrice: 24.99,
    discountedPrice: true,
    totalReview: 30,
    rating: 4.7,
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSni3f81WLvtDNfR2e-g5c-VO0N6eNhrkhhhA&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfGAQOkOZoruQ3cp6vd_TovSoUU1lDcjknzA&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtLUWwfFB03LeYqsHb1LuLyNFVUv2ITtKALA&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfytaqxH5mkhrft-GJce4laWg9etr938wGYg&s",
    ],
  },
  {
    name: "Rajkonna 100% Natural & Organic Red Sandalwood Powder",
    howToUse:
      "Hundreds of funnel absorb liquid faster and give instant dry feel. Its pleasant fragrance fights to lock odour in 240mm pad. Six wall protection prevents leakage. Converts liquid into gel and locks it inside. This pad is skin friendly and individual pouch make easy to carry and disposal for users.",
    description: "This is a sample product description.",
    price: 19.99,
    weight: "25gm",
    originalPrice: 24.99,
    discountedPrice: true,
    totalReview: 30,
    rating: 4.7,
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfGAQOkOZoruQ3cp6vd_TovSoUU1lDcjknzA&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtLUWwfFB03LeYqsHb1LuLyNFVUv2ITtKALA&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfytaqxH5mkhrft-GJce4laWg9etr938wGYg&s",
    ],
  },
];

function Recommended() {
  return (
    <div className="mx-4 ">
      <div className="text-white bg-black p-2 rounded-md text-center">
        RECOMMENDED FOR YOU
      </div>
      <div>
        {products.map((product, i) => (
          <div className="grid grid-cols-3 rounded shadow-md my-4 py-3">
            <div className="col-span-1">
              <img src={product.images[0]} alt="" />
            </div>
            <div className="col-span-2 ms-2">
              <p className="text-xs">{product.name.slice(1, 36)}</p>
              <p className="text-xs">({product.weight})</p>
              <p>
                {" "}
                <span className="text-sm font-bold maintext">
                  ${product.price.toFixed(2)}
                </span>
                {product.discountedPrice && (
                  <span className="text-gray-500 line-through ml-2">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                )}
              </p>

              <button className="p-1 border-2 mainbg text-white rounded-md font-mono text-xs">
                Add To Card
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Recommended;
