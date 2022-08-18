import { configureStore } from '@reduxjs/toolkit'

import cartReducer from '../features/cart/cartSlice'
import { cartMiddleware } from '../features/cart/middleware'
import chatReducer from '../features/chat/chatSlice'
import favoriteProductsReducer from '../features/favoriteProducts/favoriteProductsSlice'
import authReducer from '../features/user/authSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    favoriteProducts: favoriteProductsReducer,
    chat: chatReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(cartMiddleware.middleware),
})
