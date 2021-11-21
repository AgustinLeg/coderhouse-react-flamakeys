import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useFavoriteContext } from "../../context/favoriteContext";

const FavWidget = () => {
  const {itemsFav} = useFavoriteContext()
  return (
    <>
      <div className="m-0 mx-2 flex items-center">
        <Link to="/productos/favoritos" className="hover:text-red-700">
          <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
        {itemsFav.length > 0 && <span className="flex absolute -mt-10 ml-3">
          <span className="animate-ping absolute inline-flex h-5 w-5 rounded-full bg-red-400 opacity-75"></span>
          <p className="relative inline-flex rounded-full h-5 w-5 bg-red-500"><span className="text-white text-xs m-auto">{
            itemsFav.length
          }</span></p>
        </span>}
        </Link>
      </div>
    </>
  );
};

export default React.memo(FavWidget);
