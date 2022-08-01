import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { Button, Card, TextInput } from 'flowbite-react'

export const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <div className="max-w-xs m-auto mt-16">
      <h2 className="font-bold text-2xl mb-5">Crear Cuenta</h2>
      <Card>
        <form
          className="flex flex-col gap-4 items-center justify-center"
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* Nombre */}
          <div className="w-full">
            <label htmlFor="name">
              Nombre <span className="text-red-500">*</span>
            </label>
            <TextInput
              id="name"
              {...register('name', {
                required: 'Este campo es requerido',
              })}
            />
            {errors.name && (
              <span className="text-sm text-red-500">
                {errors.name.message}
              </span>
            )}
          </div>
          {/* Apellido */}
          <div className="w-full">
            <label htmlFor="lastName">
              Apellido <span className="text-red-500">*</span>
            </label>
            <TextInput
              id="lastName"
              {...register('lastName', {
                required: 'Este campo es requerido',
              })}
            />
            {errors.lastName && (
              <span className="text-sm text-red-500">
                {errors.lastName.message}
              </span>
            )}
          </div>
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
          <Button type="submit">Crear Cuenta</Button>
        </form>
        <div className="flex flex-col justify-center items-center">
          <p className="text-sm">Ya tengo mi cuenta</p>
          <Link to="/iniciar-sesion" className="text-sm text-blue-700">
            Iniciar Sesion
          </Link>
        </div>
      </Card>
    </div>
  )
}
