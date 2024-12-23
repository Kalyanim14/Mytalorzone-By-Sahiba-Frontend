import React, { useState, useEffect } from 'react';
import { fetchCart, addToCart } from '../services/cartService'; // Assuming you have addToCart method
import './Home.css';

const Cart = () => {
  const [cart, setCart] = useState([]);
  
  // Fetch the cart when the component mounts
  useEffect(() => {
    const getCart = async () => {
      const response = await fetchCart();
      setCart(response);
    };
    getCart();
  }, []);

  // Function to handle adding an item to the cart
  const handleAddToCart = async (product) => {
    const updatedCart = await addToCart(product); // Assuming addToCart sends a request to add an item
    setCart(updatedCart); // Update cart state with the new cart data
  };

  // Calculate total amount
  const totalAmount = cart.reduce((acc, item) => acc + item.productQty * item.productPrice, 0);

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      
      <div className="cart-items">
        {cart.map(item => (
          <div key={item.productId} className="cart-item">
            <h3>{item.productName}</h3>
            <p>Quantity: {item.productQty}</p>
            <p>Price: {item.productPrice}</p>
          </div>
        ))}
      </div>
      
      {/* Example Add Item to Cart Button */}
      <button onClick={() => handleAddToCart({ 
        productId: 1, 
        productName: 'T-shirt', 
        productQty: 1, 
        productPrice: 299 
      })}>
        Add T-shirt to Cart
      </button>
      
      <h2>Total: {totalAmount}</h2>
      <button>Checkout</button>
    </div>
  );
};

export default Cart;
