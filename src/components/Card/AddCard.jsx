// import React, { useEffect, useState } from "react";
// import { pink } from "@mui/material/colors";
// import Checkbox from "@mui/material/Checkbox";
// import { InputNumber } from "antd";
// import { RiDeleteBin6Line } from "react-icons/ri";
// import QtyValue from "../../common/QtyValue";
// import useCartStore from "../../store";

// const AddCard = ({ value }) => {
//   const [quantities, setQuantities] = useState(
//     value.map((item) => ({ name: item.name, qty: 1 }))
//   );

//   // const { updateQuantities, removeFromCart } = useCartStore((state) => ({
//   //   updateQuantities: state.updateQuantities,
//   //   removeFromCart: state.removeFromCart,
//   // }));

//   // const deleteItem = (name) => {
//   //   removeFromCart(name);
//   //   setQuantities((prevQuantities) =>
//   //     prevQuantities.filter((item) => item.name !== name)
//   //   );
//   // };

//   const handleQtyChange = (name, qty) => {
//     setQuantities((prevQuantities) =>
//       prevQuantities.map((item) =>
//         item.name === name ? { ...item, qty } : item
//       )
//     );
//   };

//   useEffect(() => {
//     updateQuantities(quantities);
//   }, [quantities, updateQuantities]);

//   return (
//     <div className="py-10">
//       {value?.map((v, index) => (
//         <div key={index} className="p-4 m-3 bg-white rounded-md shadow w-[85%]">
//           <div className="flex justify-between">
//             <div className="flex">
//               <div className="flex items-center"></div>
//               <div>
//                 <img src={v.imageUrl} width={70} height={70} alt="not found" />
//               </div>
//               <div className="ms-5 flex items-center">
//                 <div>
//                   <p className="">{v.name}</p>
//                   <p className="text-orange-600">Price: ৳ {v.price}</p>
//                 </div>
//               </div>
//             </div>
//             <div className="flex items-center">
//               {
//                 quantities.find((item) => item.name === v.name)?.qty
//               }
//             </div>
//             <QtyValue
//               name={v.name}
//               qty={quantities.find((item) => item.name === v.name)?.qty}
//               setQty={handleQtyChange}
//               minimumValue={1}
//             />
//             <div className="flex items-center">
//               <button
//                 onClick={() => deleteItem(v.name)}
//                 className="px-4 py-2 border border-green-900 rounded hover:border-red-600"
//               >
//                 <RiDeleteBin6Line style={{ color: "red", cursor: "pointer" }} />
//               </button>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default AddCard;

import React, { useEffect, useState } from "react";
import { pink } from "@mui/material/colors";
import Checkbox from "@mui/material/Checkbox";
import { InputNumber } from "antd";
import { RiDeleteBin6Line } from "react-icons/ri";
import QtyValue from "../../common/QtyValue";
import useCartStore from "../../store";

const AddCard = ({ value }) => {
  const [qty, setQty] = useState(1);
  const [productAdd, setproductAddy] = useState({});
  const addToCart = useCartStore((state) => state.addToCart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  useEffect(() => {
    addToCart(productAdd);
  }, [productAdd]);

  const deleteItem = (value) => {
    console.log("removeFromCart", value);
    removeFromCart(value);
  };


  return (
    <div className="py-10">
      {value?.map((v, index) => (
        <div key={index} className="p-4 m-3 bg-white rounded-md shadow w-[85%]">
          <div className="flex justify-between">
            <div className="flex">
              <div className="flex items-center"></div>
              <div>
                <img src={v?.imageUrl} width={70} height={70} alt="not found" />
              </div>
              <div className="ms-5 flex items-center">
                <div>
                  <p className="">{v?.name.substring(0,20)}...</p>
                  <p className="text-orange-600">Price: ৳ {v?.price}</p>
                </div>
              </div>
            </div>
            <div className="flex items-center">{v?.qty}</div>
            <QtyValue
              name={v}
              qty={v.qty}
              setQty={setQty}
              minimumValue={1}
              productAdd={productAdd}
              setproductAddy={setproductAddy}
            />
            <div className="flex items-center">
              <button
                onClick={() => deleteItem(v)}
                className="px-4 py-2 border border-green-900 rounded hover:border-red-600"
              >
                <RiDeleteBin6Line style={{ color: "red", cursor: "pointer" }} />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AddCard;
