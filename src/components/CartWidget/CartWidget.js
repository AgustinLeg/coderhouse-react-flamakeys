import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { useCartContext } from "../../context/cartContext";
import CartItem from "../CartItem/CartItem";
import CartActions from "../CartActions/CartActions";
const CartWidget = () => {
  const { items, total, removeItem, clearCart } = useCartContext();

  return (
    <div className="cart bg-light">
      <div className="cart-button d-flex align-items-center px-2">
        <button
          className="btn mt-3 btn-danger position-relative"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offCanvasCart"
          aria-controls="offCanvasCart"
        >
          <FontAwesomeIcon icon={faShoppingBag}></FontAwesomeIcon>
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark ">
            {items.length}{" "}
            <span className="visually-hidden">cantidad carrito</span>
          </span>
        </button>
      </div>
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="offCanvasCart"
        aria-labelledby="offCanvasCartLabel"
      >
        <div className="offcanvas-header">
          <h5 id="offCanvasCartLabel">Tu Carrito</h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body d-flex flex-column justify-content-between">
          {items.length > 0 ? (
            <>
              <div className="cart-container">
                {items.map((item) => (
                  <CartItem key={item.id} item={item} removeItem={removeItem} />
                ))}
              </div>
              <CartActions total={total} clearCart={clearCart} />
            </>
          ) : (
            <p className="text-center">Tu carrito esta vacio :(</p>
          )}
        </div>
      </div>
      
    </div>
  );
};

export default CartWidget;
