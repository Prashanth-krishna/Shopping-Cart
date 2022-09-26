import { configureStore } from "@reduxjs/toolkit";
import showSlice from "./show-slice";
import cart from "./cart-slice";

const Store = configureStore({
  reducer: { show: showSlice.reducer, cart: cart.reducer },
});

export default Store;
