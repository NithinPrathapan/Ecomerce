import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {},
  },
});

export default cartSlice.reducer;
export const { addToCart } = cartSlice.actions;
