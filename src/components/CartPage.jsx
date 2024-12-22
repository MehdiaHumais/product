import { useState, useEffect } from 'react';

const CartPage = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/carts?userId=1')
      .then((response) => response.json())
      .then((data) => setCart(data[0].products)); // Assuming only one cart
  }, []);

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.productId !== productId));
  };

  return (
    <div className="bg-gray-50 min-h-screen p-8">
      <h2 className="text-3xl font-semibold text-gray-800 mb-8">Your Cart</h2>
      {cart.length > 0 ? (
        <ul className="space-y-6">
          {cart.map((item) => (
            <li key={item.productId} className="bg-white border rounded-lg p-6 flex justify-between items-center">
              <div>
                <h3 className="font-semibold text-gray-800">{item.title}</h3>
                <p className="text-gray-600">Quantity: {item.quantity}</p>
              </div>
              <button
                onClick={() => removeFromCart(item.productId)}
                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-all"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-600">Your cart is empty.</p>
      )}
    </div>
  );
};

export default CartPage;
