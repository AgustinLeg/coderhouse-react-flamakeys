import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'

import { CartItem } from '@/components/cart'

export const CheckoutPage = () => {
  const { products, total, totalOfItems } = useSelector((state) => state.cart)
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <section className="py-10">
      <h2 className="text-xl font-bold">Finalizar Compra</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10"
      >
        <div className="bg-white rounded-xl p-4">
          <h3 className="text-xl font-bold">Informacion de compra</h3>
          <div className="flex flex-col gap-4 mt-10">
            {/* Nombre */}
            <div>
              <label htmlFor="name">
                Nombre <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                {...register('name', {
                  required: 'Este campo es requerido',
                })}
                className={`border  w-full rounded-lg p-1 mt-1 ${
                  errors.name ? 'border-red-500' : 'border-gray-400'
                }`}
              />
              {errors.name && (
                <span className="text-sm text-red-500">
                  {errors.name.message}
                </span>
              )}
            </div>
            {/* Apellido */}
            <div>
              <label htmlFor="lastName">
                Apellido <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="lastName"
                {...register('lastName', {
                  required: 'Este campo es requerido',
                })}
                className={`border  w-full rounded-lg p-1 mt-1 ${
                  errors.lastName ? 'border-red-500' : 'border-gray-400'
                }`}
              />
              {errors.lastName && (
                <span className="text-sm text-red-500">
                  {errors.lastName.message}
                </span>
              )}
            </div>
            {/* Email */}
            <div>
              <label htmlFor="email">
                Email <span className="text-red-500">*</span>
              </label>
              <input
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
                className={`border  w-full rounded-lg p-1 mt-1 ${
                  errors.email ? 'border-red-500' : 'border-gray-400'
                }`}
              />
              {errors.email && (
                <span className="text-sm text-red-500">
                  {errors.email.message}
                </span>
              )}
            </div>
            {/* Direccion 1 */}
            <div>
              <label htmlFor="address">
                Direccion <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="address"
                {...register('address', {
                  required: 'Este campo es requerido',
                })}
                className={`border  w-full rounded-lg p-1 mt-1 ${
                  errors.address ? 'border-red-500' : 'border-gray-400'
                }`}
              />
              {errors.address && (
                <span className="text-sm text-red-500">
                  {errors.address.message}
                </span>
              )}
            </div>
            {/* Direccion 2 */}
            <div>
              <label htmlFor="address2">Direccion extra</label>
              <input
                type="text"
                id="address2"
                {...register('address2')}
                className={`border  w-full rounded-lg p-1 mt-1 ${
                  errors.address2 ? 'border-red-500' : 'border-gray-400'
                }`}
              />
              {errors.address2 && (
                <span className="text-sm text-red-500">
                  {errors.address2.message}
                </span>
              )}
            </div>
            {/* Codigo postal */}
            <div>
              <label htmlFor="zip">
                Codigo Postal <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                id="zip"
                {...register('zip', {
                  required: 'Este campo es requerido',
                })}
                className={`border  w-full rounded-lg p-1 mt-1 ${
                  errors.zip ? 'border-red-500' : 'border-gray-400'
                }`}
              />
              {errors.zip && (
                <span className="text-sm text-red-500">
                  {errors.zip.message}
                </span>
              )}
            </div>
            {/* Ciudad */}
            <div>
              <label htmlFor="city">
                Ciudad <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="city"
                {...register('city', {
                  required: 'Este campo es requerido',
                })}
                className={`border  w-full rounded-lg p-1 mt-1 ${
                  errors.city ? 'border-red-500' : 'border-gray-400'
                }`}
              />
              {errors.city && (
                <span className="text-sm text-red-500">
                  {errors.city.message}
                </span>
              )}
            </div>
            {/* Telefono */}
            <div>
              <label htmlFor="phone">
                Telefono <span className="text-red-500">*</span>
              </label>
              <input
                type="number`"
                id="phone"
                {...register('phone', {
                  required: 'Este campo es requerido',
                })}
                className={`border  w-full rounded-lg p-1 mt-1 ${
                  errors.phone ? 'border-red-500' : 'border-gray-400'
                }`}
              />
              {errors.phone && (
                <span className="text-sm text-red-500">
                  {errors.phone.message}
                </span>
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-10 bg-white rounded-xl p-4">
          <h3 className="text-xl font-bold">Mi Orden ({totalOfItems})</h3>
          <div className="flex-1 flex flex-col mt-5">
            {products.map((product) => (
              <CartItem
                key={`checkout-product-${product.id}`}
                product={product}
              />
            ))}
          </div>
          <div className="flex justify-between text-2xl font-bold">
            <p>Total:</p>
            <p>${total}</p>
          </div>
          <button
            className="bg-primary w-full rounded-md py-2 text-center text-white disabled:opacity-80 disabled:cursor-not-allowed"
            disabled={!isDirty}
          >
            Finalizar compra
          </button>
        </div>
      </form>
    </section>
  )
}
