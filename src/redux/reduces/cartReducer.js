const initialState = {
  cartItems: [],
  shippingAdress: {},
  payWith: null,
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      const item = [...state.cartItems, action.payload];

      localStorage.setItem("basket", JSON.stringify(item));

      return {
        ...state,
        cartItems: item,
      };
    case "REMOVE_FROM_CART":
      const cart = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.cartItems = cart;
      localStorage.setItem("basket", JSON.stringify(state.cartItems));
      return {
        ...state,
      };
    case "SAVE_SHIPPING_ADDRESS":
      localStorage.setItem("adrress", JSON.stringify(action.payload));
      return {
        ...state,
        shippingAdress: action.payload,
      };
    case "SAVE_PAYMENTS_METHOD":
      localStorage.setItem("payWith", JSON.stringify(action.payload));
      return {
        ...state,
        payWith: action.payload,
      };

    default:
      return state;
  }
}

/*
   const itemtoremove = state.cartItems.indexOf(action.payload);
      state.cartItems.splice(itemtoremove, 1);
      const cart = [...state.cartItems];
*/
