import React from "react";
import { Link } from "react-router-dom";

import { useFavoriteContext } from "../../context/favoriteContext";

import ItemList from "../ItemList/ItemList";
import Emoji from "../../assets/emoji.svg";

const FavoriteItems = () => {
  const { itemsFav } = useFavoriteContext();

  return (
    <section>
      {itemsFav.length > 0 ? (
        <div className="container mx-auto mt-5">
          <div className="container mx-auto px-6">
            <h3 className="text-black text-4xl font-bold capitalize">
              Mis Productos Favoritos
            </h3>
            <ItemList items={itemsFav} />
          </div>
        </div>
      ) : (
        <>
          <div className="bg-gray-100 w-screen h-screen ">
            <div className="container flex h-full flex-col items-center justify-center">
              <div className="w-16">
                <img src={Emoji} alt="sad face" />
              </div>
              <span className="inline text-center text-gray-500 text-xl my-5">
                Perdon, parece que no tenes ningun producto en favoritos!
              </span>

              <Link
                to="/productos"
                className="text-gray-500 text-xl inline bg-gray-200 p-3 rounded-md hover:shadow-md"
              >
                Agregar
              </Link>
            </div>
          </div>
        </>
      )}
    </section>
  );
};
export default FavoriteItems;
