import React from "react";
import { useCartContext } from "../../context/cartContext";

const ItemCount = ({ stock, initial = 1 }) => {
  const { cantidad,setCantidad } = useCartContext();
  const removeCant = () => {
    if (!stock) return;
    if (cantidad > initial) setCantidad(cantidad - 1);
  };
  const addCant = () => {
    if (!stock) return;
    if (cantidad < stock) setCantidad(cantidad + 1);
  };

  return (
    <div className="container__quantity " style={{ maxWidth: "200px" }}>
      <div className="quantity d-flex justify-content-center mb-3">
        <button
          className="btn btn-outline-danger"
          onClick={() => removeCant(stock, initial)}
        >
          -
        </button>
        <input
          type="number"
          className="form-control text-center"
          value={stock ? cantidad : 0}
          min={initial}
          max={stock}
          readOnly
        />
        <button
          className="btn btn-outline-danger"
          onClick={() => addCant(stock)}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
