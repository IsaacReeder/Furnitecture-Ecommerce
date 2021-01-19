const CART_KEY = "cart";
const LIST_KEY = "list";
const TOKEN_KEY = "jwt";

export const calculatePrice = (items) => {
  return `$${items
    .reduce((acc, item) => acc + item.quantity * item.price, 0)
    .toFixed(2)}`;
};

export const calculateAmount = (items) => {
  return Number(
    items.reduce((acc, item) => acc + item.quantity * item.price, 0).toFixed(2)
  );
};

export const calculateQuantity = (items) => {
  var totalQuantity = 0;
  for (let item of items) {
    totalQuantity += item.quantity;
  }
  return totalQuantity;
};

export const calculateShipping = (items) => {
  return (
    Number(
      items
        .reduce((acc, item) => acc + item.quantity * item.price, 0)
        .toFixed(2)
    ) +
    items.length * 5
  );
};

// Cart
export const setCart = (value, cartKey = CART_KEY) => {
  if (localStorage) {
    localStorage.setItem(cartKey, JSON.stringify(value));
  }
};

export const getCart = (cartKey = CART_KEY) => {
  if (localStorage && localStorage.getItem(cartKey)) {
    return JSON.parse(localStorage.getItem(cartKey));
  }
  return [];
};

export const clearCart = (cartKey = CART_KEY) => {
  if (localStorage) {
    localStorage.removeItem(cartKey);
  }
};

// Wishlist
export const setList = (value, listKey = LIST_KEY) => {
  if (localStorage) {
    localStorage.setItem(listKey, JSON.stringify(value));
  }
};

export const getList = (listKey = LIST_KEY) => {
  if (localStorage && localStorage.getItem(listKey)) {
    return JSON.parse(localStorage.getItem(listKey));
  }
  return [];
};

export const clearList = (listKey = CART_KEY) => {
  if (localStorage) {
    localStorage.removeItem(listKey);
  }
};

// Auth
export const getToken = (tokenKey = TOKEN_KEY) => {
  if (localStorage && localStorage.getItem(tokenKey)) {
    return JSON.parse(localStorage.getItem(tokenKey));
  }
  return null;
};
export const setToken = (value, tokenKey = TOKEN_KEY) => {
  if (localStorage) {
    localStorage.setItem(tokenKey, JSON.stringify(value));
  }
};

export const clearToken = (tokenKey = TOKEN_KEY) => {
  if (localStorage) {
    localStorage.removeItem(tokenKey);
  }
};
