import React from "react";
import { useParams } from "react-router";

import ItemList from "../ItemList/ItemList";
import useGetProducts from "../../hooks/useGetProducts";
import useFilterProducts from "../../hooks/useFilterProducts";


import Spinner from "../Stateless/Spinner/Spinner";

const ItemListContainer = () => {
  const { nombre } = useParams();
  const { items,loading } = useGetProducts();
  const {itemsfilter} = useFilterProducts(items,nombre);
  
  return (
    <section>
      {loading 
      ? <Spinner />
      : (
        <div className="container mt-5 pt-5 ">
          <h2 className="text-center my-5">
            {nombre
              ? nombre.toUpperCase()
              : "LAS MEJORES MARCAS AL MEJOR PRECIO"}
          </h2>
          <div className="productos">
            <div className="item-list">
              <ItemList items={itemsfilter} />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ItemListContainer;
