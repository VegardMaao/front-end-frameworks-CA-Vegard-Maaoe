import { create } from "zustand";

const useCartStore = create((set, get) => ({
    items: [],
    addItem: (item) => set((state) => ({ 
      items: [...state.items, item] 
    })),
    removeItem: (itemId) => set((state) => ({ 
      items: state.items.filter(item => item.id !== itemId) 
    })),
    clearCart: () => set({ items: [] }),
    getTotalPrice: () => {
      return get().items.reduce((total, item) => total + item.price, 0)
    },
    getItemCount: () => get().items.length,
  }))
    

export default useCartStore;