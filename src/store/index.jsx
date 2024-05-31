// // src/store/cartStore.js
// import { create } from 'zustand';
// import { persist } from 'zustand/middleware';

// const useCartStore = create(
//   persist(
//     (set, get) => ({
//       cart: [],
//       quantities: [],
//       addToCart: (product) => {
//         const existingItem = get().cart.find((item) => item.name === product.name);
//         if (existingItem) {
//           set((state) => ({

//             cart: state.cart.map((item) =>{
//               console.log("item: " + item)
//               console.log("state: " + state)

//               return item.name === product.name ? { ...item, qty: item.qty + 1 } : item

//             }
//             ),
//             quantities: state.quantities.map((item) =>
//               item.name === product.name ? { ...item, qty: item.qty + 1 } : item
//             ),
//           }));
//         } else {
//           set((state) => ({
//             cart: [...state.cart, { ...product, qty: 1 }],
//             quantities: [...state.quantities, { name: product.name, qty: 1 }],
//           }));
//         }
//       },
//       removeFromCart: (productName) => {
//         set((state) => {
//           const updatedCart = state.cart
//             .map((product) => {
//               if (product.name === productName) {
//                 if (product.qty > 1) {
//                   return { ...product, qty: product.qty - 1 };
//                 } else {
//                   return null; // Remove the item from the cart if the quantity is 1
//                 }
//               } else {
//                 return product;
//               }
//             })
//             .filter(Boolean); // Filter out null values

//           const updatedQuantities = state.quantities
//             .map((item) => {
//               if (item.name === productName) {
//                 if (item.qty > 1) {
//                   return { ...item, qty: item.qty - 1 };
//                 } else {
//                   return null; // Remove the item if the quantity is 1
//                 }
//               } else {
//                 return item;
//               }
//             })
//             .filter(Boolean); // Filter out null values

//           return { cart: updatedCart, quantities: updatedQuantities };
//         });
//       },
//       updateQuantities: (newQuantities) => {
//         set((state) => {
//           const updatedCart = state.cart.map((cartItem) => {
//             const quantityItem = newQuantities.find((item) => item.name === cartItem.name);
//             if (quantityItem) {
//               return { ...cartItem, qty: quantityItem.qty };
//             } else {
//               return cartItem;
//             }
//           });

//           return { cart: updatedCart, quantities: newQuantities };
//         });
//       },
//       clearCart: () => set({ cart: [], quantities: [] }),
//     }),
//     {
//       name: 'cart-storage', // unique name
//       getStorage: () => localStorage, // (optional) by default, 'localStorage' is used
//       onRehydrateStorage: () => (state) => {
//         // Ensure quantities are initialized correctly after rehydration
//         if (state && !Array.isArray(state.quantities)) {
//           state.quantities = [];
//         }
//       },
//     }
//   )
// );

// export default useCartStore;

// src/store/cartStore.js
import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCartStore = create(
  persist(
    (set, get) => ({
      cart: [],
      quantities: [],
      addToCart: (product) => {
        const existingItem = get().cart.find(
          (item) => item.name == product.name
        );
        if (get().cart.length < 5) {
          if (product.name) {
            if (existingItem) {
              set((state) => ({
                cart: state.cart.map((item) => {
                  return item.name === product.name
                    ? { ...item, qty: product.qty }
                    : item;
                }),
              }));
            } else {
              set((state) => ({
                cart: [...state.cart, product],
              }));
            }
          }
        }
      },
      removeFromCart: (productName) => {
        set((state) => ({
          cart: state.cart.filter(
            (product) => product.name !== productName.name
          ),
        }));
      },
    }),
    {
      name: "cart-storage", // unique name
      getStorage: () => localStorage, // (optional) by default, 'localStorage' is used
      onRehydrateStorage: () => (state) => {
        // Ensure quantities are initialized correctly after rehydration
        if (state && !Array.isArray(state.quantities)) {
          state.quantities = [];
        }
      },
    }
  )
);

export default useCartStore;
