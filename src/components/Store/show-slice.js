import { createSlice } from "@reduxjs/toolkit";

const showSlice = createSlice({
  name: "show",
  initialState: {
    isCartShowing: false,
  },
  reducers: {
    toggle(state) {
      state.isCartShowing = !state.isCartShowing;
    },
  },
});

export const uiActions = showSlice.actions;
export default showSlice;
