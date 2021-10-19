import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import Spinner from "../Stateless/Spinner/Spinner";

const ItemDetailContainer = ({ items, addCantidadCarrito }) => {
  const { id } = useParams();
  const [itemdetail, setItemDetail] = useState(null);
  const [cargando, setCargando] = useState(true);
  useEffect(() => {
    const getItem = new Promise((resolve, reject) => {
      setTimeout(() => {
        if(items.length > 0){
          const item = items.find((i) => i.id === Number(id));
          if(item) {
            resolve(item);
          }else{
            reject('no encontramos el producto')
            setItemDetail(null)
          }
        }
      }, 1500);
    });
    getItem
      .then((res) =>{
        setItemDetail(res)
        setCargando(false)
      })
      .catch((err) => console.error(err))
  }, [items,id]);  
  return (
    <div
      className="container-fluid align-middle flex-column mt-5 pt-5"
      style={{ height: "100vh" }}
    >
      {cargando
        ? <Spinner />
        : <> 
          <Link to="/" className="btn btn-danger my-5">
              Volver
          </Link>
          {itemdetail
            ? <ItemDetail
                itemdetail={itemdetail}
                addCantidadCarrito={addCantidadCarrito}
              />
            : <h2 className="text-center mt-5">Ups no pudimos encontrar el producto que estaba buscando </h2>
          }
        </>
      }
      
    </div>
  );
};

export default ItemDetailContainer;
