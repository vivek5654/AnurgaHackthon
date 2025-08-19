import { useState } from 'react';
import { products } from '../data/product';
import { useCart } from '../store/cartStore';
import { useWishlist } from '../store/WishlistStore';

export default function CatalogPage() {
  const { items: cartItems, add, remove } = useCart();
  const { items: wishlistItems, toggle: toggleWishlist } = useWishlist();

  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');

  const categories = ['All', ...new Set(products.map((p) => p.category))];

  const filteredProducts = products.filter((p) => {
    const matchesCategory = category === 'All' || p.category === category;
    const matchesSearch =
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white p-8 font-sans">
      <h1 className="text-5xl font-extrabold mb-8 text-white text-center">
        Electronics Product Catalog
      </h1>

      {/* Search & Filter UI */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
        <input
          type="text"
          placeholder="Search products..."
          className="w-full md:w-1/2 bg-gray-900 rounded-lg px-4 py-3 shadow-inner placeholder-gray-500 text-white outline-none border border-gray-700 focus:border-purple-500 transition"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="flex flex-wrap gap-3 justify-center md:justify-start">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition ${
                category === cat
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 shadow-lg'
                  : 'bg-gray-800 hover:bg-gray-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredProducts.map((p) => {
          const inCart = !!cartItems[p.id];
          const inWishlist = !!wishlistItems[p.id];

          return (
            <article
              key={p.id}
              className="relative bg-gradient-to-tr from-gray-800 to-gray-900 rounded-2xl shadow-xl hover:shadow-purple-600 border border-gray-700 p-6 flex flex-col overflow-hidden"
            >
              {/* Wishlist toggle button top-right */}
              <button
                onClick={() => toggleWishlist(p)}
                aria-label={inWishlist ? 'Remove from wishlist' : 'Add to wishlist'}
                className={`absolute top-6 right-6 text-3xl transition ${
                  inWishlist ? 'text-pink-500' : 'text-gray-600 hover:text-pink-500'
                }`}
              >
                {inWishlist ? '❤️' : '🤍'}
              </button>

              <div className="overflow-hidden rounded-2xl mb-5">
                <img
                  src={p.image}
                  alt={p.name}
                  className="object-cover w-full h-48 brightness-90 hover:brightness-100 transition rounded-2xl"
                />
              </div>

              <h3 className="text-xl font-extrabold tracking-tight mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                {p.name}
              </h3>
              <p className="mb-2 text-gray-300 text-sm italic capitalize">{p.category}</p>
              <p className="mb-4 text-gray-400 text-sm h-14 overflow-hidden">{p.description}</p>

              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl font-semibold text-white">₹{p.price.toLocaleString()}</span>
                <span className="flex items-center space-x-1 text-yellow-400 font-semibold">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.21c.969 0 1.371 1.24.588 1.81l-3.4 2.455a1 1 0 00-.364 1.118l1.287 3.974c.3.921-.755 1.688-1.538 1.118l-3.4-2.455a1 1 0 00-1.176 0l-3.4 2.455c-.783.57-1.838-.197-1.538-1.118l1.287-3.974a1 1 0 00-.364-1.118L2.035 9.4c-.783-.57-.38-1.81.588-1.81h4.21a1 1 0 00.95-.69l1.286-3.974z" />
                  </svg>
                  <span>{p.rating.toFixed(1)}</span>
                </span>
              </div>

              <button
                onClick={() => add(p)}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-pink-600 hover:to-purple-600 rounded-full py-2 font-bold text-white shadow-md transition transform active:scale-95"
              >
                Add to Cart
              </button>

              <button
                onClick={() => remove(p.id)}
                disabled={!inCart}
                className={`mt-3 w-full py-2 rounded-full font-semibold transition ${
                  inCart
                    ? 'bg-red-600 hover:bg-red-700 text-white shadow-md'
                    : 'bg-gray-700 text-gray-400 cursor-not-allowed'
                }`}
              >
                Remove from Cart
              </button>
            </article>
          );
        })}
      </div>

      {filteredProducts.length === 0 && (
        <p className="mt-12 text-center text-gray-400 text-lg font-semibold">
          No products found.
        </p>
      )}
    </main>
  );
}
