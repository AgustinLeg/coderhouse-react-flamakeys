import React from "react";
import { useCartContext } from "../../context/cartContext";
import CartModal from "../CartModal/CartModal";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ itemdetail, addCantidadCarrito }) => {
  const { addItem, cantidad, setCantidad } = useCartContext();
  const { id, nombre, precio, descripcion, img, stock } = itemdetail;

  const onAdd = () => {
    addItem({
      id,
      nombre,
      precio,
      img,
      cantidad,
      total: 0,
    });
    setCantidad(1);
  };

  return (
    <div className="card m-3" data-id={id}>
      <div className="row g-0">
        <div className="col-md-6">
          <img src={img} className="img-fluid rounded-" alt="..." />
        </div>
        <div className="col-md-6">
          <div className="card-body">
            <h5 className="card-title">{nombre}</h5>
            <p className="card-text">{descripcion}</p>
            <p className="card-text fs-2">${precio}</p>
            <p className="card-text">
              <small className="text-muted">{stock} unidades disponibles</small>
            </p>
            <ItemCount
              stock={stock}
              initial={1}
              addCantidadCarrito={addCantidadCarrito}
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
