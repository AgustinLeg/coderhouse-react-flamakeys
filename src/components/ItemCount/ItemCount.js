import React from "react";

const ItemCount = ({ stock, cantidad, setCantidad, initial = 1 }) => {


  const removeCant = () => {
    if (cantidad > initial) setCantidad(c => c - 1);
  };
  const addCant = () => {
    if (cantidad < stock) setCantidad(c => c + 1);
  };

  const updateQty = ({target}) =>{
    setCantidad(Number(target.value))
  }

  return (
    <>
      <div
        className="container__quantity border border-grey rounded-0 d-flex justify-content-center mb-4 position-relative" style={{maxWidth:'125px'}}>
        <button
          className="btn text-black position-absolute start-0"
          onClick={() => removeCant()}
          aria-label="reducir la cantidad"
        >
          -
        </button>
        <input
          type="number"
          className="form-control-plaintext text-center bg-transparent border-0 quantity-item py-2 px-4"
          name="quantity"
          value={cantidad}
          min={1}
          max={stock}
          aria-label="cantidad"
          onChange={updateQty}
          autoComplete='false'
        />
        <button
          className="btn text-black position-absolute end-0"
          onClick={() => addCant()}
          aria-label="aumentar la cantidad"
        >
          +
        </button>
      </div>
    </>
  );
};

export default ItemCount;
