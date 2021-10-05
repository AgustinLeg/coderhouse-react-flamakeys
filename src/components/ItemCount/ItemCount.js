import React, { useState } from "react";

const ItemCount = ({stock,initial,addCantidadCarrito}) => {

    
    const [cantidad, setCantidad ] = useState(1)
    
    const removeCant = () => {
        if(!stock) return;
        if(cantidad > initial) setCantidad(cantidad - 1)
    }
    const addCant = () => {
        if(!stock) return;
        if(cantidad < stock) setCantidad(cantidad + 1)
    }

  return (
    <div className="container__quantity">
      <div className="quantity d-flex justify-content-center mb-3">
        <button className="btn btn-outline-primary" onClick={removeCant}>
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
        <button className="btn btn-outline-primary" onClick={addCant}>
          +
        </button>
      </div>
      <button
        disabled={stock ? false : true}
        className="btn btn-primary"
        onClick={() => addCantidadCarrito(cantidad)}
      >
        {stock ? "Añadir al carrito" : "No tenemos mas :("}
      </button>
    </div>
  );
};

export default ItemCount;
