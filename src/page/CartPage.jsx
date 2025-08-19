import { useCart } from '../store/CartStore';

export default function CartPage() {
  const { items, increment, decrement, remove } = useCart();
  const cartItems = Object.values(items);

  const totalPrice = cartItems.reduce(
    (total, { product, qty }) => total + product.price * qty,
    0
  );

  if (cartItems.length === 0) {
    return (
      <main className="p-6">
        <h1 className="text-2xl font-semibold mb-4">Your Cart is Empty</h1>
        <p>Add some products to your cart from the Catalog page.</p>
      </main>
    );
  }

  return (
    <main className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Shopping Cart</h1>
      <ul className="space-y-4">
        {cartItems.map(({ product, qty }) => (
          <li
            key={product.id}
            className="flex items-center space-x-4 border rounded-lg p-4"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-24 h-24 object-cover rounded"
            />
            <div className="flex-1">
              <h2 className="font-semibold text-lg">{product.name}</h2>
              <p className="text-gray-500">₹{product.price.toLocaleString()}</p>
              <p className="text-yellow-500">⭐ {product.rating.toFixed(1)}</p>
              <p className="mt-1 text-sm text-gray-600">{product.description}</p>
            </div>

            <div className="flex flex-col items-center space-y-2">
              <div className="flex space-x-2">
                <button
                  onClick={() => decrement(product.id)}
                  disabled={qty <= 1}
                  className={`px-3 py-1 rounded ${
                    qty <= 1
                      ? 'bg-gray-300 cursor-not-allowed'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  -
                </button>
                <span className="font-semibold">{qty}</span>
                <button
                  onClick={() => increment(product.id)}
                  className="px-3 py-1 rounded bg-blue-600 text-white hover:bg-blue-700"
                >
                  +
                </button>
              </div>
              <button
                onClick={() => remove(product.id)}
                className="text-red-600 underline hover:text-red-800"
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-6 text-right text-xl font-bold">
        Total: ₹{totalPrice.toLocaleString()}
      </div>
    </main>
  );
}
