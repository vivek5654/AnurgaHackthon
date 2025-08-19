// src/App.jsx

import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import CatalogPage from './page/CatelogCart';
import CartPage from './page/CartPage';

function NavBar() {
  const location = useLocation();

  return (
    <nav className="bg-gray-900 bg-opacity-90 backdrop-blur-md sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-6">
        <ul className="flex justify-center space-x-12 py-4">
          <li>
            <Link
              to="/"
              className={`relative text-white font-semibold transition-all duration-300 px-3 py-1 ${
                location.pathname === '/'
                  ? 'before:absolute before:-bottom-1 before:left-0 before:w-full before:h-1 before:rounded-full before:bg-gradient-to-r before:from-purple-500 before:to-pink-500'
                  : 'hover:text-purple-400'
              }`}
            >
              Catalog
            </Link>
          </li>
          <li>
            <Link
              to="/cart"
              className={`relative text-white font-semibold transition-all duration-300 px-3 py-1 ${
                location.pathname === '/cart'
                  ? 'before:absolute before:-bottom-1 before:left-0 before:w-full before:h-1 before:rounded-full before:bg-gradient-to-r before:from-purple-500 before:to-pink-500'
                  : 'hover:text-purple-400'
              }`}
            >
              Cart
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<CatalogPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </BrowserRouter>
  );
}
