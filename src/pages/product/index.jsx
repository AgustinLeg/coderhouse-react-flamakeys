import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Button, TextInput } from 'flowbite-react'

import { updateProduct } from '@/features/cart/cartSlice'

import { useGet } from '../../hooks/useGet'

export const ProductPage = () => {
  const { term } = useParams()
  const { data } = useGet(`products/${term}`)
  const { image, name, price, discount, description } = data || {}

  const [quantity, setQuantity] = useState(1)

  const dispatch = useDispatch()

  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 items-start py-5 gap-5">
        <div className=" bg-white p-5 md:p-10 rounded-xl">
          <img src={image} alt={name} className="object-cover" />
        </div>
        <div className="flex flex-col gap-4 pt-4 justify-center">
          <h2 className="text-3xl font-bold text-align-center">{name}</h2>
          <p className="text-2xl font-bold">
            ${discount ? price - price * (discount / 100) : price}
            {!!discount && (
              <span className="text-2xl font-bold text-gray-400 ml-2 line-through">
                ${price}
              </span>
            )}
          </p>
          <div className="flex max-w-xs">
            <Button color="gray" onClick={() => setQuantity(quantity - 1)}>
              -
            </Button>
            <TextInput
              type="number"
              value={quantity}
              min={1}
              className="w-auto text-center focus:outline-none text-lg border-none"
              onChange={(e) => setQuantity(Number(e.target.value))}
            />
            <Button color="gray" onClick={() => setQuantity(quantity + 1)}>
              +
            </Button>
          </div>
          <Button
            onClick={() =>
              dispatch(
                updateProduct({
                  ...data,
                  quantity,
                })
              )
            }
          >
            Agregar al carrito
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-5 mt-14">
        <h3 className="text-3xl font-bold">Acerca del producto</h3>
        <p>{description}</p>
      </div>
    </section>
  )
}
