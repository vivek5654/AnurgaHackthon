import { create } from 'zustand';

export const useWishlist = create((set) => ({
  items: {}, // { productId: product }

  toggle: (product) =>
    set((state) => {
      const exists = state.items[product.id];
      if (exists) {
        const newItems = { ...state.items };
        delete newItems[product.id];
        return { items: newItems };
      } else {
        return { items: { ...state.items, [product.id]: product } };
      }
    }),

  isInWishlist: (id) => {
    // This function will be used in components to check membership
    return !!get().items[id];
  },
}));
