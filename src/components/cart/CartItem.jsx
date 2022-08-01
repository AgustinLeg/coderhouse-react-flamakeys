import { useDispatch } from 'react-redux'

import {
  addProduct,
  decrementProduct,
  updateProduct,
} from '@/features/cart/cartSlice'

export const CartItem = ({ product }) => {
  const { image, name, price, quantity } = product

  const dispatch = useDispatch()

  return (
    <div className="flex relative gap-2  pb-2 border-b border-b-gray-200">
      {/* <Link
        to={`/productos/${slug}`}
        className="absolute w-full h-full top-0 left-0 z-10"
      /> */}
      <div className="w-24">
        <img src={image} alt={name} className="full object-cover" />
      </div>
      <div>
        <p>{name}</p>
        <p>
          {price} x {quantity}
        </p>
        <div className="flex bg-white max-w-8 ">
          <button
            className=" px-2 active:bg-secondary"
            onClick={() => dispatch(decrementProduct(product))}
          >
            -
          </button>
          <input
            type="number"
            value={quantity}
            min={1}
            className="text-center focus:outline-none text-md w-14"
            onChange={(e) =>
              dispatch(
                updateProduct({ ...product, quantity: Number(e.target.value) })
              )
            }
          />
          <button
            className="px-2 active:bg-secondary"
            onClick={() => dispatch(addProduct(product))}
          >
            +
          </button>
        </div>
      </div>
    </div>
  )
}
