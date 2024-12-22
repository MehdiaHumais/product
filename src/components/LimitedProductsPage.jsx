import { useState, useEffect } from 'react';

const LimitedProductsPage = () => {
  const [limitedProducts, setLimitedProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=5')
      .then((response) => response.json())
      .then((data) => setLimitedProducts(data));
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen p-8">
      <h2 className="text-3xl font-semibold text-gray-800 mb-8">Limited Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {limitedProducts.map((product) => (
          <div key={product.id} className="bg-white border shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-all">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-contain"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg text-gray-800">{product.title}</h3>
              <p className="text-xl text-gray-900">${product.price}</p>
              <button
                className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LimitedProductsPage;
