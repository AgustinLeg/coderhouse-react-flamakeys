import React, { useEffect, useState } from "react";
import { useCartContext } from "../../context/cartContext";
import useFormatPrice from "../../hooks/useFormatPrice";
import ItemCount from "../ItemCount/ItemCount";

const CartItem = ({ item, removeItem, tdExtra=true}) => {
  const { addItem } = useCartContext();
  const { id, imgURL, nombre, total, cantidad, precio, stock } = item;
  const [cantidadCart, setCantidadCart] = useState(cantidad);
  
  useEffect(() => {
    addItem({
      ...item,
      cantidad: cantidadCart,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cantidadCart]);

  const priceFormated = useFormatPrice(precio)

  return (
    <tr className="hover:bg-gray-100">
      <td className="flex items-center flex-col">
        <img src={imgURL} alt={`Foto producto de ${nombre}`} className="w-full lg:w-2/4"/>
        <div className="flex flex-col justify-between ml-2">
          <span className="font-bold text-xs">{nombre}</span>
          <span className="text-red-500 text-xs">Stock: {stock}</span>
          <button
            className="font-semibold hover:text-red-500 text-gray-500 text-xs mt-1"
            onClick={() => removeItem(id)}
          >
            Eliminar
          </button>
        </div>
      </td>
      <td>
        <ItemCount
          stock={stock}
          cantidad={cantidad}
          setCantidad={setCantidadCart}
        />
      </td>
      {tdExtra && (
        <td>
          <span className="text-center block font-semibold text-sm">
            {priceFormated}
          </span>
        </td>
      )}

      <td>
        <span className="text-center block font-semibold text-sm">
          {useFormatPrice(total)}
        </span>
      </td>
    </tr>
  );
};

export default CartItem;
