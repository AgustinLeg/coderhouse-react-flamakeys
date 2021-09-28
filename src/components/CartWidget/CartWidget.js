import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";

const CartWidget = () => {
  return (
    <div className="cart bg-light">
      <div className="cart-button d-flex align-items-center px-2">
        <button
          className="btn fs-1"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offCanvasCart"
          aria-controls="offCanvasCart"
        >
          <FontAwesomeIcon icon={faShoppingBag}></FontAwesomeIcon>
        </button>
          <span className="count">1</span>
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
        <div className="offcanvas-body">productos..</div>
      </div>
      
    </div>
  );
};

export default CartWidget;
