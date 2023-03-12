import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.list.find(
        (item) => item.imdbID === action.payload.imdbID
      );

      if (!item) {
        state.list.push(action.payload);
      } else {
        alert('You already have this movie on your list.');
      }
    },
    deleteCart: (state, action) => {
      state.list = state.list.filter((item) => item.imdbID !== action.payload);
    },
  },
});

// Action creators
export const { addToCart, deleteCart } = cartSlice.actions;

// Reducer
export default cartSlice.reducer;
