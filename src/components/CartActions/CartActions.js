import React from "react";
import { Link } from "react-router-dom";
import { toggleNav } from "../../helpers";
import useFormatPrice from "../../hooks/useFormatPrice";

const CartActions = ({ total, clearCart }) => {
  return (
    <div className="d-grid gap-2">
      <button
        className="btn btn-danger rounded-0"
        type="button"
        onClick={clearCart}
      >
        Vaciar Carrito
      </button>
      <div className="total-info d-flex justify-content-between my-2">
        <h6 className="fw-bold fs-4">Total:</h6>
        <span className="fw-bold fs-4">{useFormatPrice(total)}</span>
      </div>
      <Link
        to="/cart"
        className="btn btn-dark w-100 p-3 rounded-0"
        onClick={toggleNav}
        >
        Finalizar Compra
      </Link>
    </div>
  );
};

export default CartActions;
