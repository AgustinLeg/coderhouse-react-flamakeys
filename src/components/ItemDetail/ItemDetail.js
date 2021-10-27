import React, { useState } from "react";
import { useCartContext } from "../../context/cartContext";
import CartModal from "../CartModal/CartModal";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ itemdetail }) => {
  const { addItem} = useCartContext();
  const { id, nombre, precio, descripcion, imgURL, stock} = itemdetail;
  const [cantidad, setCantidad] = useState(1)
  const onAdd = () => {
    addItem({
      id,
      nombre,
      precio,
      imgURL,
      cantidad,
      total: 0,
      stock
    });
    setCantidad(1)
  };

  return (
    <div className="card m-3" data-id={id}>
      <div className="row g-0">
        <div className="col-md-6 col-lg-4">
          <img src={imgURL} className="img-fluid rounded-" alt={`Foto producto de ${nombre}`} />
        </div>
        <div className="col-md-6 col-lg-8">
          <div className="card-body">
            <h5 className="card-title">{nombre}</h5>
            <p className="card-text">{descripcion}</p>
            <p className="card-text fs-2">${precio}</p>
            <p className="card-text">
              <small className="text-muted">{stock} unidades disponibles</small>
            </p>
            <label htmlFor="quantity text-muted"><small>Cantidad:</small></label>
            <ItemCount
              stock={stock}
              cantidad={cantidad}
              setCantidad={setCantidad}
              width="200px"
            />
            <button
              disabled={stock ? false : true}
              className="btn btn-danger"
              data-bs-toggle="modal"
              data-bs-target="#modalCart"
              onClick={onAdd}
            >
              {stock ? "Añadir al carrito" : "No tenemos mas :("}
            </button>
          </div>
        </div>
      <CartModal />
      </div>
    </div>
  );
};

export default ItemDetail;
