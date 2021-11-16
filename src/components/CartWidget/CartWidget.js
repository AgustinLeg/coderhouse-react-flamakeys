import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { useCartContext } from "../../context/cartContext";
import CartItem from "../CartItem/CartItem";
import CartActions from "../CartActions/CartActions";
import { Link } from "react-router-dom";
import { toggleNav } from "../../helpers";
const CartWidget = ({path}) => {
  const { items, total,cantidad, removeItem, clearCart} = useCartContext();
  
  return (
    <div className="cart">
      <div className="cart-button d-flex align-items-center px-2">
        <button
          className="btn mt-2 text-black position-relative p-1"
          type="button"
          onClick={path === 'cart' || path === 'finalizar' ? null : toggleNav}
        >
          <FontAwesomeIcon
            icon={faShoppingBag}
            className="fs-2"
          ></FontAwesomeIcon>
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger fs-7">
            {cantidad}
            <span className="visually-hidden">cantidad carrito</span>
          </span>
        </button>
      </div>
      <div id="SideCart" className="sidenav d-flex flex-column justify-content-between">
        <button className='closebtn btn' onClick={toggleNav}>
          X
        </button>
        {items.length > 0 ? (
          <>
            <div className="cart-container">
            <h2 className="fw-bold my-2">Tu Pedido</h2>
            <hr />
              {items.map((item) => (
                <CartItem key={item.id} item={item} removeItem={removeItem} />
              ))}
            </div>
            <CartActions total={total} clearCart={clearCart} />
          </>
        ) : (
          <div className="d-flex flex-column mt-5 pt-5">
            <p className="text-center">El carrito de compras está vacío.</p>
            <button
              type="button"
              className="btn"
              data-bs-dismiss="offcanvas"
              data-bs-target="#offCanvasCart"
              aria-label="Close"
            >
              <Link to="/" className="btn btn-success">
                Quiero Comprar
              </Link>
            </button>
          </div>
        )}
      </div>
      <div className='backdrop-cart position-fixed bg-black w-100 h-100 top-0 end-0 zindex-dropdown bg-opacity-75' onClick={toggleNav}></div>
    </div>
  );
};

export default CartWidget;
