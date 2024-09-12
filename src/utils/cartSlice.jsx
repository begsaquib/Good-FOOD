import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      //mutating our state here
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      // Removing item from cart by its unique id
      state.items = state.items.filter(
        (item) => item.card.info.id !== action.payload.card.info.id
      );
    },
    clearItem: (state) => {
      state.items.length = 0;
    },
  },
});

export const { addItem, removeItem, clearItem } = cartSlice.actions;
export default cartSlice.reducer;
