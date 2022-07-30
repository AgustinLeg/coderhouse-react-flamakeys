import { createSlice } from '@reduxjs/toolkit'

const storage = localStorage.getItem('cart')
const initialState = {
  products: [],
  total: 0,
  totalOfItems: 0,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState: storage ? JSON.parse(storage) : initialState,
  reducers: {
    addProduct: (state, action) => {
      const existProduct = state.products.find(
        (product) => product.id === action.payload.id
      )
      if (existProduct) {
        existProduct.quantity += 1
        return
      }

      state.products.push(action.payload)
    },
    decrementProduct: (state, action) => {
      const product = state.products.find(
        (product) => product.id === action.payload.id
      )
      if (product.quantity > 1) {
        product.quantity -= 1
      }
    },
    removeProduct: (state, action) => ({
      ...state,
      products: state.products.filter(
        (product) => product.id !== action.payload
      ),
    }),
    updateProduct: (state, action) => {
      const product = state.products.find(
        (prod) => prod.id === action.payload.id
      )
      if (!product) {
        state.products.push(action.payload)
        return
      }
      product.quantity = action.payload.quantity
    },
    clearCart: () => initialState,
    calcTotal: (state) => {
      const total = state.products.reduce((acc, curr) => {
        return curr.quantity * curr.price + acc
      }, 0)

      return {
        ...state,
        total,
        totalOfItems: state.products.length,
      }
    },
  },
})

// Action creators are generated for each case reducer function
export const {
  addProduct,
  decrementProduct,
  removeProduct,
  calcTotal,
  clearCart,
  updateProduct,
} = cartSlice.actions

export default cartSlice.reducer
