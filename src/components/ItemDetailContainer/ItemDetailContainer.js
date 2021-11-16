import React from "react";
import { Link } from "react-router-dom";
import useGetProducts from "../../hooks/useGetProducts";
import useItemDetail from "../../hooks/useItemDetail";
import ItemDetail from "../ItemDetail/ItemDetail";
import Loader from "../Stateless/Loader/Loader";


const ItemDetailContainer = () => {

  const {items} = useGetProducts();
  const {itemDetail,loading} = useItemDetail(items);

  return (
    <div
      className="container-fluid align-middle flex-column mt-5"
      style={{ height: "100vh" }}
    >
      {loading
        ? <Loader />
        : 
        <> 
        <Link to="/" className="btn btn-dark rounded-0">
            Volver
        </Link>
        <div className="container">
          {itemDetail
            ? <ItemDetail
                itemdetail={itemDetail}
              />
            : <h2 className="text-center mt-5">Ups no pudimos encontrar el producto que estaba buscando </h2>
          }
        </div>
        </>
      }
    </div>
  );
};

export default ItemDetailContainer;
