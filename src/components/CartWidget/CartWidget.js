import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag, faTimes } from "@fortawesome/free-solid-svg-icons";

import { useCartContext } from "../../context/cartContext";
import { toggleCart } from "../../helpers";

import CartItem from "../CartItem/CartItem";
import CartActions from "../CartActions/CartActions";
import LinkButton from "../Stateless/Buttons/LinkButton";
const CartWidget = ({ path }) => {
  const { items, total, cantidad, removeItem, clearCart } = useCartContext();

  return (
    <div className="cart flex items-center mr-3">
      <button
        className="flex items-center hover:text-red-600"
        onClick={toggleCart}
      >
        <FontAwesomeIcon icon={faShoppingBag}></FontAwesomeIcon>
        {cantidad > 0 && (
          <span className="flex absolute -mt-5 ml-3">
            <span className="animate-ping absolute inline-flex h-5 w-5 rounded-full bg-red-400 opacity-75"></span>
            <p className="relative inline-flex rounded-full h-5 w-5 bg-red-500">
              <span className="text-white text-xs m-auto">{cantidad}</span>
            </p>
          </span>
        )}
      </button>
      <div className="items-center"></div>
      <div className="cart-sidebar bg-white text-gray-900 w-full md:w-96 h-screen oveflow-hidden -space-y-5 lg:-space-y-0 lg:space-y-4 pt-5 px-2 absolute inset-y-0 right-0 transform translate-x-full transition duration-500 ease-in-out z-40">
          <span>Tu carrito</span>
          <button
            className="absolute top-5 right-5 font-extrabold"
            onClick={toggleCart}
          >
            <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
          </button>
        {items.length > 0 ? (
          <>
          <div className="h-3/4 overflow-y-auto">
            <table className="mt-10 mb-5 h-10 ">
              <thead>
                <tr>
                  <th className="font-semibold text-gray-600 text-xs uppercase w-2/5">
                    Detalle del producto
                  </th>
                  <th className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">
                    Cantidad
                  </th>
                  <th className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">
                    Total
                  </th>
                </tr>
              </thead>
              <tbody className="overflow-hidden h-1/4">
                {items.map((item) => (
                  <CartItem
                    key={item.id}
                    item={item}
                    removeItem={removeItem}
                    tdExtra={false}
                  />
                ))}
              </tbody>
            </table>
          </div>
            <CartActions total={total} clearCart={clearCart} />
            </>
        ) : (
          <div className="flex flex-col">
            <p className="text-center my-10 text-base">
              El carrito de compras está vacío.
            </p>
            <LinkButton
              onClick={toggleCart}
              path="/productos"
              text="Quiero Compar"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default CartWidget;
