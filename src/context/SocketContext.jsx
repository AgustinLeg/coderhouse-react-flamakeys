import React, { createContext, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { allMessages, newMessage } from '../features/chat/chatSlice'
import { useSocket } from '../hooks'
import { scrollToBottomAnimated } from '../utils'

export const SocketContext = createContext()

export const SocketProvider = ({ children }) => {
  const { socket, online, conectarSocket, desconectarSocket } = useSocket(
    'http://localhost:8080'
  )
  const { user } = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  useEffect(() => {
    if (user) {
      conectarSocket()
    }
  }, [user, conectarSocket])

  useEffect(() => {
    if (!user) {
      desconectarSocket()
    }
  }, [user, desconectarSocket])

  useEffect(() => {
    socket?.on('all-messages', (data) => {
      dispatch(allMessages(data))
    })
    socket?.on('new-message', (data) => {
      dispatch(newMessage(data))
      scrollToBottomAnimated()
    })
    socket?.emit('get-messages')
  }, [socket, dispatch])

  return (
    <SocketContext.Provider value={{ socket, online }}>
      {children}
    </SocketContext.Provider>
  )
}
