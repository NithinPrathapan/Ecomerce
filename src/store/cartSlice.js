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
    incrementQuantity: (state, action) => {
      console.log("Increment state :", state);
      console.log("Increment state.cart :", state.cart);

      const existingItem = state.cart.find((item) => {
        console.log("Increment");
        console.log("item.id : ", item.id);
        console.log("action.payload : ", action.payload);
        return item.id === action.payload;
      });
      console.log("existingItem :", existingItem);
      if (existingItem) {
        existingItem.quantity += 1;
        state.totalQuantity += 1;
      } else {
        state.cart.push({ id, quantity: 1 });
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    decrementQuantity: (state, action) => {
      const existingItem = state.cart.find((item) => {
        return item.id === action.payload;
      });
      if (existingItem) {
        console.log("here", existingItem.quantity);
        if (existingItem.quantity > 0) {
          existingItem.quantity -= 1;
          state.totalQuantity -= 1;
        }
      }
      if (existingItem.quantity === 0) {
        state.cart = state.cart.filter((item) => item.id !== action.payload);
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    removeItem: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);

      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
  },
});

export default cartSlice.reducer;
export const {
  addItemToCart,
  incrementQuantity,
  decrementQuantity,
  removeItem,
} = cartSlice.actions;
