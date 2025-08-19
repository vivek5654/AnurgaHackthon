import { useCart } from '../store/cartStore';

export default function CartPage() {
  const { items, increment, decrement, remove } = useCart();
  const cartItems = Object.values(items);

  const totalPrice = cartItems.reduce(
    (total, { product, qty }) => total + product.price * qty,
    0
  );

  if (cartItems.length === 0) {
    return (
      <main className="min-h-screen p-10 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white font-sans flex flex-col items-center justify-center">
        <h1 className="text-4xl font-extrabold mb-4 tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
          Your Cart is Empty
        </h1>
        <p className="text-gray-400 text-lg">
          Add some products to your cart from the Catalog page.
        </p>
      </main>
    );
  }

  return (
    <main className="min-h-screen p-10 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white font-sans">
      <h1 className="text-5xl font-extrabold mb-10 tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
        Shopping Cart
      </h1>

      <ul className="space-y-8 max-w-6xl mx-auto">
        {cartItems.map(({ product, qty }) => (
          <li
            key={product.id}
            className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-10 bg-gradient-to-tr from-gray-800 to-gray-900 rounded-3xl shadow-xl border border-gray-700 p-6"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-40 h-40 object-cover rounded-2xl shadow-lg"
            />
            <div className="flex-1 flex flex-col justify-between h-full">
              <div>
                <h2 className="font-extrabold text-2xl mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                  {product.name}
                </h2>
                <p className="text-sm italic text-gray-400 mb-3 capitalize">
                  {product.category}
                </p>
                <p className="text-gray-400 text-base mb-4 max-h-14 overflow-hidden">
                  {product.description}
                </p>
              </div>
              <div className="flex items-center justify-between flex-wrap gap-4">
                <p className="text-3xl font-bold text-white">
                  ₹{product.price.toLocaleString()}
                </p>
                <p className="flex items-center text-yellow-400 text-lg font-semibold space-x-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    className="w-6 h-6"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.21c.969 0 1.371 1.24.588 1.81l-3.4 2.455a1 1 0 00-.364 1.118l1.287 3.974c.3.921-.755 1.688-1.538 1.118l-3.4-2.455a1 1 0 00-1.176 0l-3.4 2.455c-.783.57-1.838-.197-1.538-1.118l1.287-3.974a1 1 0 00-.364-1.118L2.035 9.4c-.783-.57-.38-1.81.588-1.81h4.21a1 1 0 00.95-.69l1.286-3.974z" />
                  </svg>
                  <span>{product.rating.toFixed(1)}</span>
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-4 mt-4 md:mt-0">
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => decrement(product.id)}
                  disabled={qty <= 1}
                  className={`px-5 py-2 rounded-full font-semibold transition ${
                    qty <= 1
                      ? 'bg-gray-600 cursor-not-allowed'
                      : 'bg-purple-600 hover:bg-purple-700'
                  }`}
                >
                  -
                </button>
                <span className="text-3xl font-bold">{qty}</span>
                <button
                  onClick={() => increment(product.id)}
                  className="px-5 py-2 rounded-full bg-purple-600 hover:bg-purple-700 text-white font-semibold"
                >
                  +
                </button>
              </div>

              <button
                onClick={() => remove(product.id)}
                className="text-red-600 hover:text-red-800 underline font-semibold"
              >
                Remove Item
              </button>
            </div>
          </li>
        ))}
      </ul>

      <div className="max-w-6xl mx-auto mt-16 text-right text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
        Total: ₹{totalPrice.toLocaleString()}
      </div>
    </main>
  );
}
