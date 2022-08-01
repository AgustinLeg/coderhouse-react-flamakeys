import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Button, TextInput } from 'flowbite-react'

import { updateProduct } from '../../features/cart/cartSlice'

const product = {
  id: 1,
  name: 'Producto 1',
  slug: 'producto-1',
  image:
    'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  description:
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. A deserunt veniam eius nulla maiores eaque perspiciatis obcaecati quis ut harum corporis, ducimus libero vero maxime at sequi reiciendis magni laudantium.',
  price: 5000,
  stock: 10,
  discount: 10,
}

export const ProductPage = () => {
  const { image, name, price, discount, description } = product

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
                  ...product,
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
