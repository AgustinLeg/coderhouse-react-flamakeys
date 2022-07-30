import { RiShoppingBag3Line } from 'react-icons/ri'
import { useDispatch, useSelector } from 'react-redux'

import { clearCart } from '../../features/cart/cartSlice'
import { useDisclosure } from '../../hooks/useDisclosure'
import { Drawer } from '../ui/Drawer'

import { CartItem } from './CartItem'

export const CartDrawer = () => {
  const dispatch = useDispatch()
  const { products, total, totalOfItems } = useSelector((state) => state.cart)
  const { isOpen, onToggle } = useDisclosure()

  return (
    <>
      <button
        className="flex justify-center align-center rounded-lg"
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
              <div className="flex-1 flex flex-col">
                {products.map((product) => (
                  <CartItem
                    key={`cart-product-${product.id}`}
                    product={product}
                  />
                ))}
              </div>
              <div className="flex flex-col gap-5">
                <button
                  className="w-full py-1 border-red-500 border text-red-500 rounded-md"
                  onClick={() => dispatch(clearCart())}
                >
                  Vaciar carrito
                </button>
                <div className="flex justify-between text-2xl font-bold">
                  <p>Total:</p>
                  <p>${total}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </Drawer>
    </>
  )
}
