import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: null,
  token: null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, { payload }) => ({
      ...state,
      ...payload,
    }),
    removeCredentials: () => initialState,
  },
})

// Action creators are generated for each case reducer function
export const { setCredentials, removeCredentials } = authSlice.actions

export default authSlice.reducer
