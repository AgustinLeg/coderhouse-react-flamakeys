import React, { useEffect, useState } from "react";
import { useCartContext } from "../../context/cartContext";
import useFormatPrice from "../../hooks/useFormatPrice";
import ItemCount from "../ItemCount/ItemCount";

const CartItem = ({ item, removeItem }) => {
  const { addItem } = useCartContext();
  const { id, imgURL, nombre, total, cantidad, stock } = item;
  const [cantidadCart, setCantidadCart] = useState(cantidad);
  
  useEffect(() => {
    addItem({
      ...item,
      cantidad: cantidadCart,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cantidadCart]);

  return (
    <div className="card mb-5 border-0 p-2">
      <div className="row g-0">
        <div className="col-3">
          <img
            src={imgURL}
            className="img-fluid rounded-start"
            alt={`Foto producto ${nombre}`}
          />
        </div>
        <div className="col-7">
          <div className="card-body">
            <h5 className="card-title" style={{ fontSize: "14px" }}>
              {nombre}
            </h5>
            <ItemCount
              stock={stock}
              cantidad={cantidad}
              setCantidad={setCantidadCart}
              width="120px"
            />
          </div>
        </div>
        <div className="col-2 d-flex flex-column align-items-center ">
          <button
            type="button"
            className="btn text-danger"
            aria-label="Close"
            onClick={() => removeItem(id)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-trash"
              viewBox="0 0 16 16"
            >
              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
              <path
                fillRule="evenodd"
                d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
              />
            </svg>
          </button>
          <p className="card-text mt-4 fw-bold" style={{ fontSize: "12px" }}>
            {useFormatPrice(total)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
