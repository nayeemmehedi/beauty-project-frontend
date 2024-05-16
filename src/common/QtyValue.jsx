import React, { useState } from "react";

import { IoMdAdd } from "react-icons/io";
import { TiMinus } from "react-icons/ti";

function QtyValue({qty=1, setQty}) {
//   const [qty, setQty] = useState(1);


  const incrementQty = () => {
    if (qty < 5) {
      setQty(qty + 1);
    }
  };

  const decrementQty = () => {
    if (qty > 0) {
      setQty(qty - 1);
    }
  };

  return (
    <div className="flex bg-[#F5F5F5] h-8 w-24 justify-between  items-center p-2 rounded-md">
      <div className="cursor-pointer hover:text-red-500">
        <TiMinus onClick={decrementQty}></TiMinus>
      </div>

      <div className="  text-center font-bold">{qty}</div>

      <div className="cursor-pointer hover:text-red-500">
        <IoMdAdd onClick={incrementQty}></IoMdAdd>
      </div>
    </div>
  );
}

export default QtyValue;
