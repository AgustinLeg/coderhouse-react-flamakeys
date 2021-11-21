import React from "react";

import useGetProducts from "../../hooks/useGetProducts";

import NotFound from "../../pages/404/NotFound";
import ItemList from "../ItemList/ItemList";
import NavBreadCumb from "../NavBreadCumb/NavBreadCumb";
import Loader from "../Stateless/Loader/Loader";

const ItemListContainer = () => {
  const { items, categoria, loading } = useGetProducts();

  return (
    <section>
      {loading ? (
        <Loader />
      ) : (
        <>
          {categoria ? (
            <NavBreadCumb navigation={[categoria]} />
          ) : (
            <NavBreadCumb />
          )}
          <div className="container mx-auto mt-5">
            {items.length > 0 ? (
              <div className="container mx-auto px-6">
                <h3 className="text-black text-4xl font-bold capitalize">
                  {categoria || "las mejores marcas al mejor precio"}
                </h3>
                <ItemList items={items} />
              </div>
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
