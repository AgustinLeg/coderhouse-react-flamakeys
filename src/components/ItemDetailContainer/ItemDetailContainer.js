import React from "react";
import { NavLink } from "react-router-dom";
import useGetProducts from "../../hooks/useGetProducts";
import useItemDetail from "../../hooks/useItemDetail";
import ItemDetail from "../ItemDetail/ItemDetail";
import Loader from "../Stateless/Loader/Loader";

const ItemDetailContainer = () => {
  const { items } = useGetProducts();
  const { itemDetail, loading } = useItemDetail(items);
  return (
    <div
      className="container-fluid align-middle flex-column mt-5"
      style={{ height: "100vh" }}
    >
      {loading ? (
        <Loader />
      ) : (
        <>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <NavLink exact to="/" className="format-link text-black" >
                  Inicio
                </NavLink>
              </li>
              <li className="breadcrumb-item">
                <NavLink exact to="/" className="format-link text-black" activeClassName='active'>
                  Productos
                </NavLink>
              </li>
              <li className="breadcrumb-item">
                <NavLink exact to={`/categoria/${itemDetail.categoria}`} className="format-link text-black text-capitalize"  activeClassName='active'>
                  {itemDetail.categoria}
                </NavLink>
              </li>
              <li className="breadcrumb-item">
                <NavLink exact to={`/producto/${itemDetail.id}`} className="format-link text-black"  activeClassName='active'>
                  {itemDetail.shortName}
                </NavLink>
              </li>
            </ol>
          </nav>
          <div className="container pt-5">
            {itemDetail ? (
              <ItemDetail itemdetail={itemDetail} />
            ) : (
              <h2 className="text-center mt-5">
                Ups no pudimos encontrar el producto que estaba buscando{" "}
              </h2>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default ItemDetailContainer;
