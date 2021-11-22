import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";

import { useCartContext } from "../../context/cartContext";

import { toggleCart } from "../../helpers";

import useError from "../../hooks/useError";
import useFormatPrice from "../../hooks/useFormatPrice";

import Error from "../Alerts/Error";
import ItemCount from "../ItemCount/ItemCount";
import Button from "../Stateless/Buttons/Button";

const ItemDetail = ({ itemdetail }) => {
  const { addItem } = useCartContext();
  const { id, nombre, precio, descripcion, imgURL, stock, categoria } =
    itemdetail;
  const [cantidad, setCantidad] = useState(1);
  const { error, newError } = useError();
  const history = useHistory();
  const addCart = (buy = "") => {
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
      if (buy === "cart") {
        toggleCart();
      } else {
        history.push("/cart");
      }
      setCantidad(1);
    }
  };

  return (
    <div className="container px-5 py-24 mx-auto">
      <div className="lg:w-4/5 mx-auto flex flex-wrap">
        <div className="lg:w-1/2 w-full">
          <img
            className="w-full rounded"
            src={imgURL}
            alt={`Foto producto ${nombre}`}
          />
        </div>
        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
          <div className="border-b-2 border-gray-800 pb-5">
            <h2 className="text-sm title-font text-gray-500 tracking-widest uppercase">
              {categoria}
            </h2>
            <h1 className="text-black text-xl md:text-3xl title-font font-medium mb-4">
              {nombre}
            </h1>
            <p className="leading-relaxed mb-5 text-sm md:text-base">
              {descripcion}
            </p>
            <span className="title-font font-medium text-2xl text-gray-900">
              {useFormatPrice(precio)}
            </span>
          </div>
          {stock > 0 ? (
            <>
              <div className="flex mt-6 items-center pb-5  mb-5">
                <div>
                  <span className="mr-3 text-gray-500">
                    {stock} unidades disponibles
                  </span>
                  <ItemCount
                    stock={stock}
                    cantidad={cantidad}
                    setCantidad={setCantidad}
                    width="200px"
                  />
                </div>
              </div>
              {error && (
                <Error
                  msg={`No puede agregar mas ${nombre}, la cantidad maxima es ${stock}`}
                />
              )}
              <div className="flex justify-between items-center mt-6">
                <div className="left">
                  <Button
                    onClick={addCart}
                    color="gray-900"
                    text="Comprar Ahora"
                  />
                  <button
                    className="mx-2 text-gray-900 border rounded-md p-2 hover:bg-gray-200 focus:outline-none"
                    onClick={() => addCart("cart")}
                  >
                    <FontAwesomeIcon icon={faShoppingBag}></FontAwesomeIcon>
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="mt-5">
              <span className="text-red-600 text-sm font-medium rounded focus:outline-none focus:bg-gray-500">
                No tenemos stock
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
