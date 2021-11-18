import React from "react";
import { NavLink } from "react-router-dom";

import useGetProducts from "../../hooks/useGetProducts";

import NotFound from "../../pages/404/NotFound";
import ItemList from "../ItemList/ItemList";
import Spinner from "../Stateless/Spinner/Spinner";

const ItemListContainer = () => {
  const { items, categoria, loading } = useGetProducts();
  return (
    <section>
      {loading ? (
        <Spinner />
      ) : (
        <>
          {categoria && (
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <NavLink exact to="/" className="format-link text-black">
                    Inicio
                  </NavLink>
                </li>
                <li class="breadcrumb-item">
                  <NavLink
                    exact
                    to={`/categoria/${categoria}`}
                    className="format-link text-black text-capitalize"
                    activeClassName="active"
                  >
                    {categoria}
                  </NavLink>
                </li>
              </ol>
            </nav>
          )}
          <div className="container mt-5">
            {items.length > 0 ? (
              <>
                <h2 className="text-start my-5 text-uppercase fw-bold">
                  {categoria || "las mejores marcas al mejor precio"}
                </h2>
                <div className="productos">
                  <div className="item-list">
                    <ItemList items={items} />
                  </div>
                </div>
              </>
            ) : (
              <NotFound msg="Todavia no tenemos estos productos!" />
            )}
          </div>
        </>
      )}
    </section>
  );
};

export default ItemListContainer;
