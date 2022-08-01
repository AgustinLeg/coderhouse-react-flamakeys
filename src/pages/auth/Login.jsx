import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { Button, Card, TextInput } from 'flowbite-react'

export const LoginPage = () => {
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
          {/* <div className="flex items-center gap-2">
            <Label htmlFor="remember">Remember me</Label>
          </div> */}
          <Button type="submit">Inicar Sesion</Button>
        </form>
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
