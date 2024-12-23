import React, { useState, useEffect } from 'react';
import { fetchCart } from '../services/cartService';
import './Home.css';

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const getCart = async () => {
      const response = await fetchCart();
      setCart(response);
    };
    getCart();
  }, []);

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
      <h2>Total: {totalAmount}</h2>
      <button>Checkout</button>
    </div>
  );
};

export default Cart;
