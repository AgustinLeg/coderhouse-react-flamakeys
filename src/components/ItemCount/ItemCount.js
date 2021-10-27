import React from "react";

const ItemCount = ({ stock, cantidad, setCantidad,initial = 1, width}) => {

  

  const removeCant = () => {
    if (!stock) return;
    if (cantidad > initial) setCantidad(cantidad - 1);
  };
  const addCant = () => {
    if (!stock) return;
    if (cantidad < stock) setCantidad(cantidad + 1);
  };

  return (
    <>
      <div
        className="container__quantity border border-dark rounded-pill d-flex justify-content-center mb-4 p-1"
        style={{ maxWidth: width }}
      >
        <button
          className="btn rounded-circle bg-dark text-white"
          onClick={() => removeCant()}
        >
          -
        </button>
        <input
          type="number"
          className="form-control-plaintext text-center bg-transparent border-0"
          name="quantity"
          value={cantidad}
          min={1}
          max={stock}
          aria-label="Cambiar cantidad"
          readOnly
        />
        <button
          className="btn rounded-circle bg-dark text-white"
          onClick={() => addCant()}
        >
          +
        </button>
      </div>
    </>
  );
};

export default ItemCount;
