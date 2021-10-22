import React from "react";
import { Link } from "react-router-dom";

const CartModal = () => {
  return (
    <div
      className="modal fade"
      id="modalCart"
      tabIndex="-1"
      aria-labelledby="modalCartLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Producto añadido al carrito</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body text-center">
            <p>¿Deseas seguir comprando?</p>
          </div>
          <div className="modal-footer d-flex justify-content-between">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Seguir Comprando
            </button>
            <button type="submit" data-bs-dismiss="modal" className="btn">
              <Link to="/cart" className="btn btn-success">
                Finalizar Compra
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
