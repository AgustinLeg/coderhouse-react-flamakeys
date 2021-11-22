import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const FavButton = ({onClick, fav= false}) => {
  const color = fav ? 'bg-red-600 text-white lg:hover:bg-gray-800 lg:hover:text-gray-500' : 'bg-gray-800 text-gray-500 lg:hover:bg-red-600 lg:hover:text-white'
  
  return (
    <button className={`rounded-full w-8 h-8  p-0 border-0 inline-flex items-center justify-center ml-4  transition cursor-pionter ${color}`} onClick={onClick}>
      <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
    </button>
  );
};

export default FavButton;
