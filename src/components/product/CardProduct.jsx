import toast, { Toaster } from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { Badge, Button, Card } from 'flowbite-react'

import { addProduct } from '@/features/cart/cartSlice'

export const ProductCard = ({ product }) => {
  const { image, title, id, price, discount } = product

  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(addProduct(product))
    toast('Producto agregado al carrito', {
      position: 'bottom-center',
      duration: 2000,
    })
  }

  return (
    <div className="max-w-xs relative">
      {!!discount && (
        <span className="absolute top-2 left-2">
          <Badge color="info">- {discount}%</Badge>
        </span>
      )}
      <Link
        to={`/producto/${id}`}
        className="absolute h-full w-full top-0 left-0 z-0"
      />
      <Card imgAlt={name} imgSrc={image}>
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </a>
        <span className="text-3xl font-bold text-gray-900 dark:text-white">
          ${discount ? price - price * (discount / 100) : price}
          {!!discount && (
            <span className="text-2xl font-bold text-gray-400 ml-2 line-through">
              ${price}
            </span>
          )}
        </span>
        <div className="relative h-12">
          <div className="absolute z-10">
            <Button onClick={addToCart}>Agregar al carrito</Button>
          </div>
        </div>
      </Card>
      <Toaster />
    </div>
  )
}
