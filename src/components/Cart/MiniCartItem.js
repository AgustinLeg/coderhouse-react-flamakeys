import React from "react";
import { useCartContext } from "../../context/cartContext";
import useFormatPrice from "../../hooks/useFormatPrice";

const MiniCartItem = ({ item, sinStock}) => {
  const { removeItem } = useCartContext();
  return (
    <div className={`flex justify-between mt-6 ${sinStock ? 'bg-red-600 text-white' : 'text-gray-600'}`}>
      <div className="flex">
        <img
          className="h-20 w-20 object-cover rounded"
          src={item.imgURL}
          alt={`Foto producto de ${item.nombre}`}
        />
        <div className="mx-3">
          <h3 className="text-sm ">{item.nombre}</h3>
          <div className="flex items-center mt-2">
            <span className=" mx-2 text-sm">
              Cantidad: {item.cantidad}
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between">
        <button
          className="font-semibold hover:text-red-500  text-xs mt-1"
          onClick={() => removeItem(item.id)}
        >
          Eliminar
        </button>
        <span className="text-sm">{useFormatPrice(item.total)}</span>
      </div>
    </div>
  );
};

export default MiniCartItem;
