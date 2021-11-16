import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useCartContext } from "../../context/cartContext";
import { toggleNav } from "../../helpers";
import useError from "../../hooks/useError";
import useFormatPrice from "../../hooks/useFormatPrice";
import Error from "../Error/Error";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ itemdetail }) => {
  const { addItem } = useCartContext();
  const { id, nombre, precio, descripcion, imgURL, stock } = itemdetail;
  const [cantidad, setCantidad] = useState(1);
  const { error, newError } = useError();
  const history = useHistory();
  const addCart = (buy = false) => {
    if (cantidad > stock) {
      newError(5000);
    } else {
      addItem({
        id,
        nombre,
        precio,
        imgURL,
        cantidad,
        total: 0,
        stock,
      });
      if(buy){
        history.push("/cart");
      }else{
        toggleNav();
      }
      setCantidad(1);
    }
  };
  return (
    <div data-id={id}>
      <div className="row g-0">
        <div className="col-lg-5 bg-white">
          <img
            src={imgURL}
            className="img-fluid rounded-"
            alt={`Foto producto de ${nombre}`}
          />
        </div>
        <div className="col-lg-7">
          <div className="card-body text-black">
            <h5 className="card-title fs-2 fw-bold w-75">{nombre}</h5>
            <p className="card-text fs-5">{useFormatPrice(precio)} </p>
            <p className="card-text">{descripcion}</p>
            <p className="card-text">
              <small className="text-muted">{stock} unidades disponibles</small>
            </p>

            {stock ? (
              <>
                <span className="text-uppercase fw-bold">Cantidad</span>
                <ItemCount
                  stock={stock}
                  cantidad={cantidad}
                  setCantidad={setCantidad}
                  width="200px"
                />
                {error && (
                  <Error
                    msg={`No puede agregar mas ${nombre}, la cantidad maxima es ${stock}`}
                  />
                )}
                <button
                  disabled={!stock && true}
                  className="btn border-dark w-100 py-3 rounded-0 fw-bold"
                  onClick={() => addCart(false)}
                >
                  Agregar al carrito
                </button>
                <button
                  className="btn btn-dark w-100 py-3 rounded-0 fw-bold mt-2"
                  onClick={() => addCart(true)}
                >
                  Comprar ahora
                </button>
              </>
            ) : (
              <span className="btn border-danger py-3 rounded-0 fw-bold text-danger">
                No tenemos stock
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
