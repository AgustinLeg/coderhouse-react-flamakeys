import React from 'react'
import { Link } from 'react-router-dom'

const CartActions = ({total,clearCart}) => {
    return (
        <div className="d-grid gap-2">
            <button
              className="btn btn-secondary"
              type="button"
              onClick={clearCart}
            >
              Vaciar Carrito
            </button>
            <div className="total-info d-flex justify-content-between my-2">
              <h6 className="fw-bold fs-4">Total:</h6>
              <span className="fw-bold fs-4">${total}</span>
            </div>
            <button type="button" className="btn" data-bs-dismiss="offcanvas" data-bs-target="#offCanvasCart" aria-label="Close">
              <Link to="/cart" className="btn btn-success">
                Finalizar Compra
              </Link>
            </button>
          </div>
    )
}

export default CartActions
