import { createSlice } from "@reduxjs/toolkit";

const intialCart = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart")) || []
  : [];

const totalQuantity = intialCart.reduce(
  (total, item) => total + item.quantity,
  0
);
const initialState = {
  cart: Array.isArray(intialCart) ? intialCart : [],
  totalQuantity,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      "";
      const { id } = action.payload;
      const existingItem = state.cart.find((item) => item.id === id);
      if (existingItem) {
        existingItem.quantity += 1;
        state.totalQuantity += 1;
      } else {
        state.cart.push({ id, quantity: 1 });
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
  },
});

export default cartSlice.reducer;
export const { addItemToCart } = cartSlice.actions;
