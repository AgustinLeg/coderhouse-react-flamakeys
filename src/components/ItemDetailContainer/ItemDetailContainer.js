import React from "react";
import { Link } from "react-router-dom";
import useGetProducts from "../../hooks/useGetProducts";
import useItemDetail from "../../hooks/useItemDetail";
import ItemDetail from "../ItemDetail/ItemDetail";
import Spinner from "../Stateless/Spinner/Spinner";

const ItemDetailContainer = (addCantidadCarrito) => {

  const {items} = useGetProducts();
  const {itemDetail,loading} = useItemDetail(items);

  return (
    <div
      className="container-fluid align-middle flex-column mt-5 pt-5"
      style={{ height: "100vh" }}
    >
      {loading
        ? <Spinner />
        : 
        <> 
        <Link to="/" className="btn btn-danger my-5">
            Volver
        </Link>
        {itemDetail
          ? <ItemDetail
              itemdetail={itemDetail}
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
