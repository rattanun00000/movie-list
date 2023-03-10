import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.find((item) => item.imdbID === action.payload.imdbID);

      if (!item) {
        state.push(action.payload);
      }
    },
    deleteCart: (state, action) =>
      (state = state.filter((item) => item.imdbID !== action.payload)),
  },
});

// Action creators
export const { addToCart, deleteCart } = cartSlice.actions;

// Reducer
export default cartSlice.reducer;
