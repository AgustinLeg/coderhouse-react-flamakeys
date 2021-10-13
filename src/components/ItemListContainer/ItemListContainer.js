import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({ items }) => {
  const { nombre } = useParams();

  const [itemsfilter, setItemsFilter] = useState([]);
  useEffect(() => {
    const filtrarProductos = (productos) => {
      let filter;
      switch (nombre) {
        case "teclados":
          filter = productos.filter((item) => item.categoria === nombre);
          setItemsFilter(filter);
          break;
        case "mouse":
          filter = productos.filter((item) => item.categoria === nombre);
          setItemsFilter(filter);
          break;
        default:
          setItemsFilter(productos);
          break;
      }
    };
    filtrarProductos(items);
  }, [nombre, items]);
  return (
    <section>
      <div className="container mt-5 pt-5 ">
        <h2 className="text-center my-5">
          {nombre ? nombre.toUpperCase() : "LAS MEJORES MARCAS AL MEJOR PRECIO"}
        </h2>
        <div className="productos">
          <div className="item-list">
            <ItemList items={itemsfilter} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ItemListContainer;
