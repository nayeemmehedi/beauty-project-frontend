// src/store/cartStore.js
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useCartStore = create(persist(
  (set) => ({
    cart: [],
    addToCart: (product) => set((state) => ({
      cart: [...state.cart, product]
    })),
    removeFromCart: (productId) => set((state) => ({
      cart: state.cart.filter(product => product.id !== productId)
    })),
    clearCart: () => set({ cart: [] })
  }),
  {
    name: 'cart-storage', // unique name
    getStorage: () => localStorage, // (optional) by default, 'localStorage' is used
  }
));

export default useCartStore;
