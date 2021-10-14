import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import productos from "../../data/productos";
import Spinner from "../Stateless/Spinner/Spinner";

const ItemListContainer = ({ items, setItems}) => {
  const { nombre } = useParams();

  const [itemsfilter, setItemsFilter] = useState([]);
  
  useEffect(() => {
      const getItems = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(productos);
        }, 1000);
      });
      getItems.then((res) => {
        setItems(res);
      });
  
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
  }, [items,nombre,setItems]);
  return (
    <section>
      {items.length > 0
            ?<div className="container mt-5 pt-5 ">
                <h2 className="text-center my-5">
                  {nombre ? nombre.toUpperCase() : "LAS MEJORES MARCAS AL MEJOR PRECIO"}
                </h2>
                <div className="productos">
                  <div className="item-list">
                    <ItemList items={itemsfilter} />
                  </div>
                </div>
              </div>
              : <Spinner />
      }

    </section>
  );
};

export default ItemListContainer;
