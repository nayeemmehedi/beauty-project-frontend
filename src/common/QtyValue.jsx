import React, { useEffect } from "react";
import { IoMdAdd } from "react-icons/io";
import { TiMinus } from "react-icons/ti";
import useCartStore from "../store";

function QtyValue({
  name = {},
  qty,
  setQty,
  minimumValue = 0,
  productAdd,
  setproductAddy,
}) {
  const addToCart = useCartStore((state) => state.addToCart);

  const incrementQty = () => {
    if (qty < 5) {
      if (Object.keys(name).length > 0) {
        setproductAddy({ ...name, qty: qty + 1 });
        console.log("productAddy", productAdd);
        if (productAdd) {
          addToCart(productAdd);
        }else{
          console.log("productAddy not found");
        }
      } else {
        setQty(qty + 1);
      }
    }
  };

  const decrementQty = () => {
    if (qty > minimumValue) {
      if (Object.keys(name).length > 0) {
        setproductAddy({ ...name, qty: qty - 1 });
        console.log("productAddy", productAdd);
        if (productAdd) {
          addToCart(productAdd);
        }else{
          console.log("productAddy not found");

        }
      } else {
        setQty(qty - 1);
      }
    }
  };

  // useEffect(() => {
  //   setproductAddy({ ...name, qty });
  // }, []);

  return (
    <div className="flex bg-[#F5F5F5] h-8 w-24 justify-between items-center p-2 rounded-md">
      <div className="cursor-pointer hover:text-red-500">
        <TiMinus onClick={decrementQty}></TiMinus>
      </div>
      <div className=" text-center font-bold">{qty}</div>
      <div className="cursor-pointer hover:text-red-500">
        <IoMdAdd onClick={incrementQty}></IoMdAdd>
      </div>
    </div>
  );
}

export default QtyValue;
