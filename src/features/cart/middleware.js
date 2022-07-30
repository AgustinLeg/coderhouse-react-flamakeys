import { createListenerMiddleware } from '@reduxjs/toolkit'

import {
  addProduct,
  calcTotal,
  clearCart,
  decrementProduct,
  removeProduct,
} from './cartSlice'

export const cartMiddleware = createListenerMiddleware()

// Add one or more listener entries that look for specific actions.
// They may contain any sync or async logic, similar to thunks.
cartMiddleware.startListening({
  actionCreator: addProduct,
  effect: (_, listenerApi) => {
    listenerApi.dispatch(calcTotal())
    localStorage.setItem('cart', JSON.stringify(listenerApi.getState().cart))
  },
})
cartMiddleware.startListening({
  actionCreator: decrementProduct,
  effect: (_, listenerApi) => {
    listenerApi.dispatch(calcTotal())
    localStorage.setItem('cart', JSON.stringify(listenerApi.getState().cart))
  },
})
cartMiddleware.startListening({
  actionCreator: removeProduct,
  effect: (_, listenerApi) => {
    listenerApi.dispatch(calcTotal())
    localStorage.setItem('cart', JSON.stringify(listenerApi.getState().cart))
  },
})
cartMiddleware.startListening({
  actionCreator: clearCart,
  effect: () => {
    localStorage.removeItem('cart')
  },
})
