import { configureStore } from "@reduxjs/toolkit";
import WishListReducer from "./slices/WishListSlice";
import CartListReducer from "./slices/CartListSlice"
import ProductReducer from "./slices/ProductSlice"

export const store = configureStore({
    reducer:{
        wishlist:WishListReducer,
        cart:CartListReducer,
        product:ProductReducer
    }
})