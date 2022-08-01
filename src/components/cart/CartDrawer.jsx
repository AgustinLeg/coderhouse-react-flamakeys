import { RiShoppingBag3Line } from 'react-icons/ri'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { clearCart } from '../../features/cart/cartSlice'
import { useDisclosure } from '../../hooks/useDisclosure'
import { Drawer } from '../ui'

import { CartItem } from './CartItem'

export const CartDrawer = () => {
  const dispatch = useDispatch()
  const { products, total, totalOfItems } = useSelector((state) => state.cart)
  const { isOpen, onToggle } = useDisclosure()

  return (
    <>
      <button
        className="flex justify-center align-center rounded-lg w-12"
        onClick={onToggle}
      >
        <RiShoppingBag3Line size={22} />
        {!!totalOfItems && totalOfItems}
      </button>
      <Drawer isOpen={isOpen} toggleMenu={onToggle}>
        <div className="p-2 h-full pb-10">
          <h3 className="text-xl font-bold">Mi carrito</h3>
          {!products.length && (
            <div className="py-10 text-center">
              <p>No hay productos en su carrito.</p>
            </div>
          )}
          {!!products.length && (
            <div className="flex flex-col h-full">
              <div className="flex-1 flex flex-col mt-5">
                {products.map((product) => (
                  <CartItem
                    key={`cart-product-${product.id}`}
                    product={product}
                  />
                ))}
              </div>
              <div className="flex flex-col gap-5">
                <button
                  className="w-full py-1 border-blue-700 border text-blue-700 rounded-md"
                  onClick={() => dispatch(clearCart())}
                >
                  Vaciar carrito
                </button>
                <div className="flex justify-between text-2xl font-bold">
                  <p>Total:</p>
                  <p>${total}</p>
                </div>
                <Link
                  to="/finalizar-compra"
                  className="bg-blue-700 w-full rounded-md py-2 text-center text-white"
                  onClick={onToggle}
                >
                  Finalizar compra
                </Link>
              </div>
            </div>
          )}
        </div>
      </Drawer>
    </>
  )
}
