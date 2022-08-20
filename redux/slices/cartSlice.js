import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    loadCartFromLocalStorge: (state, action) => {
      state.cartItems = action.payload; //[...state.cartItems, { ...action.payload }];
    },
    addToCart: (state, action) => {
      const itemExists = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (itemExists) {
        itemExists.quantity += action.payload.quantity;
      } else {
        state.cartItems = [...state.cartItems, { ...action.payload }];
        localStorage.setItem("basket", JSON.stringify(state.cartItems));
      }
    },
    RemoveFromCart: (state, action) => {
      const index = state.cartItems.findIndex(
        (item) => item.id === action.payload
      );
      state.cartItems.splice(index, 1);
      localStorage.setItem("basket", JSON.stringify(state.cartItems));
    },
    incrementQuantity: (state, action) => {
      const item = state.cartItems.find((item) => item.id === action.payload);
      item.quantity++;
      localStorage.setItem("basket", JSON.stringify(state.cartItems));
    },
    decrementQuantity: (state, action) => {
      const item = state.find((item) => item.id === action.payload);
      if (item.quantity === 1) {
        const index = state.findIndex((item) => item.id === action.payload);
        state.cartItems.splice(index, 1);
      } else {
        item.quantity--;
      }
      localStorage.setItem("basket", JSON.stringify(state.cartItems));
    },
  },
});

// export const selectTotal = (state) =>
//   state.Cart.cartItems
//     .reduce((total, item) => total + item.price, 0)
//     .toFixed(2);

// export const CheckoutProduct = (state) => state.Cart.cartItems;

export const { addToCart, RemoveFromCart, loadCartFromLocalStorge } =
  cartSlice.actions;

export default cartSlice.reducer;
