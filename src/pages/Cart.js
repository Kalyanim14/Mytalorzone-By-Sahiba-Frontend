import React, { useState, useEffect } from 'react';
import { fetchCart, addToCart } from '../services/cartService';  // Import both functions
import './Home.css';

const Cart = () => {
  const [cart, setCart] = useState([]);  // State for storing cart items
  const [newItem, setNewItem] = useState({});  // State for new item to add to cart

  useEffect(() => {
    const getCart = async () => {
      const cartData = await fetchCart();  // Fetch the current cart data
      setCart(cartData);  // Set the cart data in state
    };
    getCart();
  }, []);

  const totalAmount = cart.reduce(
    (acc, item) => acc + item.productQty * item.productPrice, 
    0
  );  // Calculate total amount for the cart

  const handleAddToCart = async () => {
    const updatedCart = await addToCart(newItem);  // Call addToCart with the new item
    setCart(updatedCart);  // Update the cart with the new items
  };

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

      <h2>Total: {totalAmount}</h2>

      {/* Example form for adding a new item */}
      <div className="add-item-form">
        <input
          type="text"
          placeholder="Product Name"
          onChange={(e) => setNewItem({ ...newItem, productName: e.target.value })}
        />
        <input
          type="number"
          placeholder="Quantity"
          onChange={(e) => setNewItem({ ...newItem, productQty: e.target.value })}
        />
        <input
          type="number"
          placeholder="Price"
          onChange={(e) => setNewItem({ ...newItem, productPrice: e.target.value })}
        />
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>

      <button>Checkout</button>
    </div>
  );
};

export default Cart;
