export const addProduct = (cart, product) => {
  const existing = cart.find(({ id }) => id === product.id);
  if (existing) {
    return cart.map((item) =>
      item.id === product.id
        ? { ...item, quantity: item.quantity + product.quantity }
        : item
    );
  }
  return [...cart, { ...product }];
};

export const removeProduct = (cart, id) => {
  if (!cart.find((item) => item.id === id)) {
    throw new Error(`Produsul cu id-ul ${id} nu există în coș.`);
  }
  return cart.filter((item) => item.id !== id);
};

export const updateQuantity = (cart, id, quantity) => {
  if (!cart.find((item) => item.id === id)) {
    throw new Error(`Produsul cu id-ul ${id} nu există în coș.`);
  }
  return cart.map((item) => (item.id === id ? { ...item, quantity } : item));
};

export const calculateTotal = (cart) =>
  cart.reduce((total, { price, quantity }) => total + price * quantity, 0);
