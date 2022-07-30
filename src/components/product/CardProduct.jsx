import { RiShoppingBag3Line } from 'react-icons/ri'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { addProduct } from '../../features/cart/cartSlice'

export const ProductCard = ({ product }) => {
  const { image, name, slug, price, discount } = product

  const dispatch = useDispatch()

  return (
    <div className="flex flex-col gap-5 relative max-w-xs rounded-3xl bg-white pb-4">
      <Link
        to={`/productos/${slug}`}
        className="absolute w-full h-full top-0 left-0 z-10"
      />
      <img src={image} alt={name} className="rounded-t-3xl" />
      <div className="p-2">
        <p className="font-bold">{name}</p>
        <span className="font-bold">${price}</span>
      </div>
      <button
        className="absolute top-2 right-2 flex justify-center align-center bg-white p-2 rounded-lg z-20"
        onClick={() => dispatch(addProduct(product))}
      >
        <RiShoppingBag3Line size={24} />
      </button>
      {!!discount && (
        <span className="absolute top-2 left-2 flex justify-center align-center bg-primary py-1 px-2 rounded-lg text-xs">
          - {discount}%
        </span>
      )}
    </div>
  )
}
