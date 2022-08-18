import { createSlice } from '@reduxjs/toolkit'

const initialState = []

export const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    allMessages: (state, { payload }) => [...payload],
    newMessage: (state, { payload }) => {
      return [...state, payload]
    },
    clearChat: () => initialState,
  },
})

// Action creators are generated for each case reducer function
export const { allMessages, newMessage, clearChat } = chatSlice.actions

export default chatSlice.reducer
