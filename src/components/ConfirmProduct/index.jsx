import React, { useEffect, useState } from "react";
import { InputNumber } from "antd";
import { RiDeleteBin6Line } from "react-icons/ri";
import useCartStore from "../../store";

const ConfirmProducts = () => {
  const value = useCartStore((state) => state.cart);

  console.log("ki value: ", value);
  const [qty, setQty] = useState(1);

  return (
    <div className="my-20 ">
      {value?.map((v, item) => (
        <div
          key={item}
          className="p-4 m-3 bg-white rounded-md shadow w-[65%] mx-auto "
        >
          <div className="flex justify-between">
            <div className=" flex ">
              <div className="flex items-center"></div>
              <div>
                <img
                  src={v.imageUrl}
                  width={70}
                  height={70}
                  alt="not found"
                ></img>
              </div>
              <div className="ms-5 flex items-center">
                <div>
                  <p className="">{v.name}</p>
                  <p className="text-orange-600">Price: ৳ 200</p>
                </div>
              </div>
            </div>
            <div className=" flex items-center">2 kg</div>

            <div className=" flex items-center">Color : red</div>
            <div className=" flex items-center">Status : Paid</div>

            <div className=" flex items-center">Date : 2-4 November</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ConfirmProducts;
