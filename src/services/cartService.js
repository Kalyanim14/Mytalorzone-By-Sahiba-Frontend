export const fetchCart = async () => {
    const response = await fetch('/api/cart');
    return response.json();
  };
  