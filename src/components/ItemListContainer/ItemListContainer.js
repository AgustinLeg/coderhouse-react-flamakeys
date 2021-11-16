import React from "react";

import useGetProducts from "../../hooks/useGetProducts";

import NotFound from "../../pages/404/NotFound";
import ItemList from "../ItemList/ItemList";
import Loader from "../Stateless/Loader/Loader";

const ItemListContainer = () => {
  const { items, categoria, loading } = useGetProducts();
  return (
    <section>
      {loading ? (
        <Loader />
      ) : (
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
      )}
    </section>
  );
};

export default ItemListContainer;
