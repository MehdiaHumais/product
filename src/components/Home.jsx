import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Home = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then((response) => response.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* Header Section */}
      <header className="bg-blue-900 text-white p-5 shadow-md w-100%" >
        <nav className="flex justify-between items-center container mx-auto">
          <Link to="/" className="text-3xl font-extrabold hover:text-gray-300 transition">
            Tech Mart
          </Link>
          <div className="relative flex space-x-6">
            {/* Categories Dropdown */}
            <div className="relative group">
              <button className="text-lg px-6 py-3 bg-blue-700 rounded-lg hover:bg-blue-600 transition">
                Categories
              </button>
              <div className="absolute top-12 left-0 mt-2 bg-white rounded-lg shadow-lg w-48 opacity-0 group-hover:opacity-100 transition-opacity">
                {categories.map((category) => (
                  <Link
                    key={category}
                    to={`/category/${category}`}  
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    {category}
                  </Link>
                ))}
              </div>
            </div>

            {/* Other Buttons */}
            <div className="relative group">
              <Link
                to="/cart"
                className="text-lg px-6 py-3 bg-green-700 rounded-lg hover:bg-green-600 transition"
              >
                Your Cart
              </Link>
            </div>

            <div className="relative group">
              <Link
                to="/limited-products"
                className="text-lg px-6 py-3 bg-orange-700 rounded-lg hover:bg-orange-600 transition"
              >
                Limited Products
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <section className="container mx-auto p-8 text-center flex-1">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-4">Welcome to Tech Mart</h1>
        <p className="text-xl text-gray-600 mb-8">Your one-stop shop for the latest tech accessories</p>

        <Link
          to="/limited-products"
          className="bg-blue-600 text-white text-xl px-8 py-4 rounded-lg shadow-md hover:bg-blue-700 transition-all"
        >
          Shop Limited Products
        </Link>
      </section>
    </div>
  );
};

export default Home;
