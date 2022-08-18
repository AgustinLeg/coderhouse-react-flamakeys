import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { TextInput } from 'flowbite-react'

import { SocketContext } from '../../context/SocketContext'
import { hourMonth } from '../../utils'

export const ChatPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const { user } = useSelector((state) => state.auth)
  const messages = useSelector((state) => state.chat)
  const { socket } = useContext(SocketContext)

  const onSubmit = ({ message }) => {
    socket?.emit('create-message', {
      author: {
        _id: user?._id,
        email: user?.email,
      },
      message,
    })
  }

  return (
    <div className="container h-5/6 flex flex-col">
      <h2 className="font-bold text-3xl">Chat</h2>
      <div className="flex-1 bg-slate-400 flex gap-4 flex-col p-2">
        {messages.map(({ _id, message, author, createdAt }) => (
          <div
            key={_id}
            className={`flex w-full gap-2  ${
              author.email === user.email ? 'items-end' : 'items-start'
            }  flex-col`}
          >
            <div
              className={`${
                author.email === user.email ? 'bg-blue-300' : 'bg-slate-200'
              }  p-2 pt-0 w-2/4 flex flex-col gap-3`}
            >
              <span className="text-sm text-slate-600 ">{author.email}</span>
              <p>{message}</p>
            </div>
            <span className="text-sm text-slate-600">
              {hourMonth(createdAt)}
            </span>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          id="message"
          {...register('message', {
            required: 'Este campo es requerido',
          })}
          required={true}
          addon={<button>Enviar</button>}
        />
      </form>
      {errors.message && (
        <span className="text-sm text-red-500">{errors.message.message}</span>
      )}
    </div>
  )
}
