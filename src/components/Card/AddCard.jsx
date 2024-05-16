import React, { useEffect, useState } from "react";
import { pink } from "@mui/material/colors";
import Checkbox from "@mui/material/Checkbox";
// import food from "/public/food.jpg";
import { InputNumber } from "antd";

const AddCard = ({value}) => {
    console.log("ki value: ", value);

  return (
    <div>
      {value?.map((v, item) => (
        <div key={item} className="p-10 m-5 bg-white">
          <div className="grid grid-cols-5">
            <div className="col-span-3 flex ">
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
                  <p className="">
                    {v.name}
                  </p>
                  <p className="text-orange-600">Price: ৳ {v.price}</p>
                </div>
              </div>
            </div>
            <div className="col-span-1 flex items-center">{v?.qty} kg</div>
            <div className="col-span-1 flex items-center">
              <button
                onClick={() => dispatch(productDeleteRedux(v.englishName))}
                className="px-4 py-2 border border-green-900 rounded hover:border-red-600 "
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AddCard;
