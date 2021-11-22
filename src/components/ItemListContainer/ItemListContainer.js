import React from "react";

import useGetProducts from "../../hooks/useGetProducts";

import NotFound from "../../pages/404/NotFound";
import ItemList from "../ItemList/ItemList";
import Loader from "../Stateless/Loader/Loader";
import BreadCrumb from "../BreadCrumb/BreadCrumb";

const ItemListContainer = () => {
  const { items, categoria, loading } = useGetProducts();
  const navigation= [{nombre:'productos',path:'/productos'},{nombre:categoria,path:`/categoria/${categoria}`}]
  return (
    <section>
      {loading ? (
        <Loader />
      ) : (
        <>
          {categoria ? (
            <BreadCrumb navigation={navigation} />
          ) : (
            <BreadCrumb navigation={[{nombre:'productos',path:'/productos'}]}/>
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
