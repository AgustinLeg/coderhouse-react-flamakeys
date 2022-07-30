import { configureStore } from '@reduxjs/toolkit'

import cartReducer from '../features/cart/cartSlice'
import favoriteProductsReducer from '../features/favoriteProducts/favoriteProductsSlice'
import userReducer from '../features/user/userSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
    favoriteProducts: favoriteProductsReducer,
  },
})
