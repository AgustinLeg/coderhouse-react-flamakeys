import { configureStore } from '@reduxjs/toolkit'

import cartReducer from '../features/cart/cartSlice'
import { cartMiddleware } from '../features/cart/middleware'
import favoriteProductsReducer from '../features/favoriteProducts/favoriteProductsSlice'
import userReducer from '../features/user/userSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
    favoriteProducts: favoriteProductsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(cartMiddleware.middleware),
})
