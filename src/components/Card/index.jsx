// // src/Cart.js
// import React from 'react';
// import useCartStore from '../../store';

import QtyValue from "../../common/QtyValue";
import useCartStore from "../../store";
import PhoneInputComponent from "../../utils/PremiumMobileInput";
// import PremiumMobileInput from "../../utils/PremiumMobileInput";
import AddCard from "./AddCard";
// import OderSummery from "./OderSummery";

// function Card() {
//   const cart = useCartStore((state) => state.cart);
//   const removeFromCart = useCartStore((state) => state.removeFromCart);
//   const clearCart = useCartStore((state) => state.clearCart);

//   return (
//     <div>
//       <h1 className="text-2xl font-bold my-16">Shopping Cart</h1>
//       {cart.length === 0 ? (
//         <p>Your cart is empty</p>
//       ) : (
//         <div>
//           {cart.map((product) => (
//             <div key={product.id} className="border p-4">
//               <h2 className="text-xl">{product.name}</h2>
//               <p>${product.price}</p>
//               <button 
//                 className="bg-red-500 text-white px-4 py-2"
//                 onClick={() => removeFromCart(product.id)}
//               >
//                 Remove
//               </button>
//             </div>
//           ))}
//           <button 
//             className="bg-gray-500 text-white px-4 py-2 mt-4"
//             onClick={clearCart}
//           >
//             Clear Cart
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Card;

function Card() {

  const cart = useCartStore((state) => state.cart);



    return (
      <div className="bg-zinc-200 my-16">
        <div className="w-[95%] ml-auto mr-auto">
          <div className="grid grid-cols-3">
            <div className="col-span-2">
              <AddCard value={cart}></AddCard>
            </div>
            <div className="">
                <QtyValue></QtyValue>

              {/* <OderSummery value={cart}></OderSummery> */}
            </div>
          </div>
        </div>
       
        {/* <PremiumMobileInput></PremiumMobileInput> */}
      </div>
    );
  }

  export default Card;
