export const fetchCart = async () => {
    const response = await fetch('/api/cart');
    return response.json();
  };
  // cartService.js

// Fetch the cart data
export const fetchCart = async () => {
  try {
    const response = await fetch('/api/cart');  // Replace with your actual API URL
    if (!response.ok) {
      throw new Error('Failed to fetch cart data');
    }
    return response.json();  // Returns the parsed JSON data
  } catch (error) {
    console.error('Error fetching cart:', error);
    return [];
  }
};

// Add an item to the cart
export const addToCart = async (product) => {
  try {
    const response = await fetch('/api/cart', {  // Replace with your actual API URL
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product),
    });

    if (!response.ok) {
      throw new Error('Failed to add item to cart');
    }

    const data = await response.json();  // Assuming the backend sends back the updated cart
    return data.cart;  // Returning the updated cart data from the response
  } catch (error) {
    console.error('Error adding to cart:', error);
  }
};
