import { configureStore } from "@reduxjs/toolkit";
import { CartSlice } from "./feature/cart";

export default configureStore({
    reducer: {
        cart: CartSlice.reducer
    }
})