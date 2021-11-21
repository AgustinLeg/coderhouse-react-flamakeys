import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useFavoriteContext } from "../../context/favoriteContext";

import useFormatPrice from "../../hooks/useFormatPrice";
import FavButton from "../Stateless/Buttons/FavButton";

const Item = ({ item }) => {
  const { nombre, stock, imgURL, precio, id, categoria} = item;
  const {itemsFav, toggleFavItem} = useFavoriteContext()
  const [fav, setFav] = useState(itemsFav.some(item => item.id === id))

  
  const toggleFav = () => {
    toggleFavItem(item)
    setFav(!fav)
  };

  return (
    <div className="flex flex-col h-full p-1 border-box bg-white rounded x relative">
      <Link
        to={`/producto/${id}`}
        className="w-full h-full absolute z-10"
      ></Link>
      <div className="flex justify-center items-center rounded w-full h-56 overflow-hidden relative">
        <img src={imgURL} className="w-full" alt={`imagen de ${nombre}`} />
        {stock === 0 && (
          <div className="bg-red-500 text-white text-xs w-1/5 absolute top-2 right-0 text-center">
            sin stock
          </div>
        )}
      </div>
      <div className="flex border-box p-1 h-58 flex-col">
        <p className="text-sm text-gray-500 capitalize">{categoria}</p>
        <p className="h-28 pt-2 overflow-hidden">{nombre}</p>
        <div className="flex flex-row items-center justify-between relative z-20">
          <p className="my-5">{useFormatPrice(precio)}</p>
          <FavButton onClick={toggleFav} fav={fav}/>
        </div>
        <p className="text-center text-sm bg-gray-900 rounded py-2 text-white ">
          Ver Producto
        </p>
      </div>
    </div>
  );
};

export default React.memo(Item);
