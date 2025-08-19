// src/App.jsx

import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import CatalogPage from './page/CatelogCart';
import CartPage from './page/CartPage';

function NavBar() {
  const location = useLocation();

  return (
    <nav className="bg-gray-800 p-4 flex justify-center space-x-6">
      <Link
        to="/"
        className={`text-white hover:underline ${
          location.pathname === '/' ? 'underline font-bold' : ''
        }`}
      >
        Catalog
      </Link>
      <Link
        to="/cart"
        className={`text-white hover:underline ${
          location.pathname === '/cart' ? 'underline font-bold' : ''
        }`}
      >
        Cart
      </Link>
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
