import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const FavButton = ({onClick, fav= false}) => {
  return (
    <button className={`rounded-full w-8 h-8  p-0 border-0 inline-flex items-center justify-center ml-4  transition ${fav ? 'bg-red-600 text-white hover:bg-gray-800 hover:text-gray-500': 'bg-gray-800 text-gray-500 hover:bg-red-600 hover:text-white'}`} onClick={onClick}>
      <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
    </button>
  );
};

export default FavButton;
