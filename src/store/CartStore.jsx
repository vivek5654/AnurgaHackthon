import { create } from 'zustand';

export const useCart = create((set) => ({
  items: {}, // { productId: { product, qty } }

  add: (product) =>
    set((state) => {
      const existingQty = state.items[product.id]?.qty ?? 0;
      return {
        items: {
          ...state.items,
          [product.id]: { product, qty: existingQty + 1 },
        },
      };
    }),

  increment: (productId) =>
    set((state) => {
      if (!state.items[productId]) return;
      const qty = state.items[productId].qty + 1;
      return {
        items: {
          ...state.items,
          [productId]: { ...state.items[productId], qty },
        },
      };
    }),

  decrement: (productId) =>
    set((state) => {
      if (!state.items[productId]) return;
      const qty = state.items[productId].qty - 1;
      const newItems = { ...state.items };
      if (qty <= 0) {
        delete newItems[productId];
      } else {
        newItems[productId] = { ...newItems[productId], qty };
      }
      return { items: newItems };
    }),

  remove: (productId) =>
    set((state) => {
      const newItems = { ...state.items };
      delete newItems[productId];
      return { items: newItems };
    }),
}));
