import { useDispatch } from 'react-redux'

import {
  addProduct,
  decrementProduct,
  updateProduct,
} from '../../features/cart/cartSlice'

export const CartItem = ({ product }) => {
  const { image, name, price, quantity } = product

  const dispatch = useDispatch()

  return (
    <div className="flex relative">
      {/* <Link
        to={`/productos/${slug}`}
        className="absolute w-full h-full top-0 left-0 z-10"
      /> */}
      <img src={image} alt={name} className="w-10" />
      <div>
        <p>{name}</p>
        <p>
          {price} x {quantity}
        </p>
        <div className="flex bg-white">
          <button
            className="px-5 py-2 active:bg-secondary"
            onClick={() => dispatch(decrementProduct(product))}
          >
            -
          </button>
          <input
            type="number"
            value={quantity}
            min={1}
            className="flex-1 text-center focus:outline-none text-lg"
            onChange={(e) =>
              dispatch(
                updateProduct({ ...product, quantity: Number(e.target.value) })
              )
            }
          />
          <button
            className="px-5 py-2 active:bg-secondary"
            onClick={() => dispatch(addProduct(product))}
          >
            +
          </button>
        </div>
      </div>
    </div>
  )
}
