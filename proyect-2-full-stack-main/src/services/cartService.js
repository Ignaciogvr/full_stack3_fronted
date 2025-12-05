// src/services/cartService.js

export const getCart = () => {
  return JSON.parse(localStorage.getItem("cart") || "[]");
};

export const addToCart = (producto, cantidad) => {
  const cart = getCart();
  const existe = cart.find((p) => p.id === producto.id);

  if (existe) {
    existe.cantidad += cantidad;
  } else {
    cart.push({ ...producto, cantidad });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
};

export const removeFromCart = (id) => {
  const cart = getCart().filter((p) => p.id !== id);
  localStorage.setItem("cart", JSON.stringify(cart));
};

export const clearCart = () => {
  localStorage.removeItem("cart");
};
