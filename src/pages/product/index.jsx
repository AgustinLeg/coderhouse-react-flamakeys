import { useState } from 'react'
import { useDispatch } from 'react-redux'

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
  const { image, name, price, discount } = product

  const [quantity, setQuantity] = useState(1)

  const dispatch = useDispatch()

  return (
    <section className="flex flex-wrap justify-center py-5 gap-2">
      <img src={image} alt={name} className="max-w-lg" />
      <div className="flex flex-col gap-4 pt-4 justify-center">
        <h2 className="text-3xl font-bold text-align-center">{name}</h2>
        <p className="text-2xl font-bold">
          ${discount ? price - price * (discount / 100) : price}
          {!!discount && (
            <span className="text-2xl font-bold text-gray ml-2 line-through">
              ${price}
            </span>
          )}
        </p>
        <div className="flex bg-white max-w-xs">
          <button
            className="px-5 py-2 active:bg-secondary"
            onClick={() => setQuantity(quantity - 1)}
          >
            -
          </button>
          <input
            type="number"
            value={quantity}
            min={1}
            className="flex-1 text-center focus:outline-none text-lg"
            onChange={(e) => setQuantity(e.target.value)}
          />
          <button
            className="px-5 py-2 active:bg-secondary"
            onClick={() => setQuantity(quantity + 1)}
          >
            +
          </button>
        </div>
        <button
          className="bg-primary p-2 w-full text-md rounded-lg text-white active:bg-opacity-80"
          onClick={() =>
            dispatch(
              updateProduct({
                ...product,
                quantity: quantity + (product.quantity || 1),
              })
            )
          }
        >
          Agregar al carrito
        </button>
      </div>
    </section>
  )
}
