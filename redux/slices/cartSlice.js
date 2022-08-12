import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  // runInClient
  //     ? localStorage.getItem("basket")
  //       ? JSON.parse(localStorage.getItem("basket"))
  //       : []
  //     : [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cartItems = [...state.cartItems, action.payload];
      localStorage.setItem("basket", JSON.stringify(state.cartItems));
    },
    RemoveFromCart: (state, action) => {
      const cart = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.cartItems = cart;
      localStorage.setItem("basket", JSON.stringify(state.cartItems));
    },
  },
});

export const selectTotal = (state) =>
  state.Cart.cartItems
    .reduce((total, item) => total + item.price, 0)
    .toFixed(2);

export const CheckoutProduct = (state) => state.Cart.cartItems;

export const { addToCart, RemoveFromCart } = cartSlice.actions;

export default cartSlice.reducer;
