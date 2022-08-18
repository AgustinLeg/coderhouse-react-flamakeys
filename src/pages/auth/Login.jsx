import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button, Card, Spinner, TextInput } from 'flowbite-react'
import Cookies from 'js-cookie'

import { setCredentials } from '../../features/user/authSlice'
import { shopAPI } from '../../services/api'

export const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm()
  const [error, setError] = useState(false)
  const dispatch = useDispatch()

  const onSubmit = async (payload) => {
    try {
      setError(false)
      const { data } = await shopAPI.post('/auth/login', payload)
      Cookies.set('token', data.token)
      dispatch(setCredentials(data))
    } catch (error) {
      setError(true)
    }
  }

  return (
    <div className="max-w-md m-auto mt-16">
      <h2 className="font-bold text-2xl text-center mb-5">Iniciar Sesion</h2>
      <Card>
        <form
          className="flex flex-col gap-4 justify-center items-center"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="w-full">
            <label htmlFor="email">
              Email <span className="text-red-500">*</span>
            </label>
            <TextInput
              type="email"
              id="email"
              {...register('email', {
                required: 'Este campo es requerido',
                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: 'Porfavor ingrese un email valido',
                },
              })}
            />
            {errors.email && (
              <span className="text-sm text-red-500">
                {errors.email.message}
              </span>
            )}
          </div>
          <div className="w-full">
            <label htmlFor="password">
              Contraseña <span className="text-red-500">*</span>
            </label>
            <TextInput
              type="password"
              id="password"
              {...register('password', {
                required: 'Este campo es requerido',
                pattern: {
                  value: 6,
                  message: 'Porfavor ingrese un contraseña mas larga',
                },
              })}
            />
            {errors.password && (
              <span className="text-sm text-red-500">
                {errors.password.message}
              </span>
            )}
          </div>
          <Button type="submit">
            {isSubmitting && <Spinner size="sm" light={true} />}
            Inicar Sesion
          </Button>
        </form>
        {error && (
          <div className="w-full bg-red-400 text-center p-5">
            <p>Error al crear la cuenta</p>
          </div>
        )}
        <div className="flex flex-col justify-center items-center">
          <p className="text-sm">¿Nuevo en FlamaKeys?</p>
          <Link to="/crear-cuenta" className="text-sm text-blue-700">
            Crear Cuenta
          </Link>
        </div>
      </Card>
    </div>
  )
}
