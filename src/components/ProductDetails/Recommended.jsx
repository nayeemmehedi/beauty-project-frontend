import React from "react";
import { productDetailsDemo } from "../../common/product";
import useCartStore from "../../store";


function Recommended({product}) {

  const addToCart = useCartStore((state) => state.addToCart);
 const products = productDetailsDemo.slice(0,3).filter(p=> p.id !== product.id)

 console.log("Product",products)

  const addProduct =(p)=>{
    addToCart({...p })

  }

  return (
    <div className="mx-4 ">
      <div className="text-white bg-black p-2 rounded-md text-center">
        RECOMMENDED FOR YOU
      </div>
      <div>
        {products.map((pro, i) => (
          <div className="grid grid-cols-3 rounded shadow-md my-4 py-3">
            <div className="col-span-1">
              <img src={pro.images[0]} alt="" />
            </div>
            <div className="col-span-2 ms-2">
              <p className="text-xs">{pro.name.slice(1, 36)}</p>
              <p className="text-xs">({pro.weight})</p>
              <p>
                {" "}
                <span className="text-sm font-bold maintext">
                ৳ {pro.price}
                </span>
                {pro.discountedPrice && (
                  <span className="text-gray-500 line-through ml-2">
                    ৳ {pro.originalPrice}
                  </span>
                )}
              </p>

              <button onClick={()=>addProduct(pro)} className="p-1 border-2 mainbg text-white rounded-md font-mono text-xs">
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
