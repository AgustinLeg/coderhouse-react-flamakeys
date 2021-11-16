import React from "react";

const Modal = ({ items, closeModal }) => {
  return (
    <div className="position-fixed bg-black w-100 h-100 top-0 end-0 zindex-fixed bg-opacity-75 d-flex flex-column bg-opacity-align-items-center justify-content-center overflow-auto modal-style">
        <div className="d-grid gap-2 col-6 mx-auto mb-5">
        <button className="btn btn-primary" type="button" onClick={closeModal}>
          Cerrar
        </button>
      </div>
      <div className="row justify-content-center">
        {items.map((item) => (
          <div className="card col-md-4 m-2">
            <div className="row g-0 justify-content-center">
              <div className="col-md-4">
                <img
                  src={item.imgURL}
                  className="img-fluid rounded-start"
                  alt={`Foto Producto de ${item.nombre}`}
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{item.nombre}</h5>
                  <p className="card-text">Precio: {item.precio}</p>
                  <p className="card-text">
                    <small className="text-muted">
                      unidades: {item.cantidad}
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Modal;
