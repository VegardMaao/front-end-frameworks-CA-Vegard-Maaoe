import { create } from "zustand";
import { persist } from 'zustand/middleware'

const useCartStore = create(persist(
  (set, get) => ({
    items: [],
    addItem: (item) => set((state) => ({ items: [...state.items, item] })),
    removeItem: (itemId) => set((state) => ({
      items: state.items.filter(item => item.id !== itemId)
    })),
    clearCart: () => set({ items: [] }),
    getTotalPrice: () => {
      return get().items.reduce((total, item) => total + item.price, 0)
    },
  }),
  {
    name: 'cart-storage',
    getStorage: () => localStorage, 
  }
)
)
    

export default useCartStore;