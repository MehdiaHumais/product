import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import CategoryPage from './components/CategoryPage';
import CartPage from './components/CartPage';
import LimitedProductsPage from './components/LimitedProductsPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:categoryName" element={<CategoryPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/limited-products" element={<LimitedProductsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
