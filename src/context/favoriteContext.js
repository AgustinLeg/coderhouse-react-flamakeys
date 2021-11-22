import React, { createContext, useContext, useEffect, useState } from "react";

const FavoriteContext = createContext();
export const useFavoriteContext = () => useContext(FavoriteContext);

const FavoriteProvider = ({ children }) => {
  const itemsInicial = JSON.parse(localStorage.getItem("favoriteItems")) || [];
  const [itemsFav, setItemsFav] = useState(itemsInicial);

  useEffect(() => {
    localStorage.setItem("favoriteItems", JSON.stringify(itemsFav));
  }, [itemsFav]);
  
  const toggleFavItem = (item) => {
    const existe = itemsFav.some((i) => i.id === item.id);
    if (existe) {
      const itemsUpdate = itemsFav.filter((i) => i.id !== item.id);
      setItemsFav(itemsUpdate);
    } else {
      setItemsFav([
          ...itemsFav,
          item
      ]);
    }
  };

  return (
    <FavoriteContext.Provider
      value={{
        itemsFav,
        toggleFavItem
      }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteProvider;
