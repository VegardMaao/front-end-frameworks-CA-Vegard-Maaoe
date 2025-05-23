import { create } from "zustand";
import { persist } from 'zustand/middleware';

const useCartStore = create(persist(
  (set, get) => ({
    items: [],
    showCart: false,
    setShowCart: () => set((state) => {
      if (state.items.length > 0) {
        return {
          showCart: true
        }
      } else {
        return {
          showCart: false
        }
      }
    }),
    addItem: (item) => set((state) => ({ items: [...state.items, item] })),
    removeItem: (itemId) => set((state) => ({
      items: state.items.filter(item => item.id !== itemId)
    })),
    clearCart: () => set({ items: [] }),
    getTotalPrice: () => {
      let num = get().items.reduce((total, item) => total + item.price, 0);
      num = Math.round(num * 100) / 100;
      return num;
    }
  }),
  {
    name: 'cart-storage',
    getStorage: () => localStorage, 
  }
)
)
    

export default useCartStore;