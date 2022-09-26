import { createSlice } from "@reduxjs/toolkit";

const cart = createSlice({
  name: "cart",
  initialState: {
    items: [],
    noOfItems: 0,
  },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const ExistingItem = state.items.find((item) => item.id === newItem.id);

      state.noOfItems++;
      if (!ExistingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          title: newItem.title,
          quantity: 1,
          totalAmount: newItem.price,
        });
      } else {
        ExistingItem.quantity++;
        ExistingItem.TotalAmount += newItem.price;
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const ExistingItem = state.items.find((item) => item.id === id);
      state.noOfItems--;
      if (ExistingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        ExistingItem.quantity--;
        ExistingItem.totalAmount -= ExistingItem.price;
      }
    },
  },
});

export default cart;
export const cartActions = cart.actions;
