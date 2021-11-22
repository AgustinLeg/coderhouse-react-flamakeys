import React from "react";
import useItemDetail from "../../hooks/useItemDetail";
import BreadCrumb from "../BreadCrumb/BreadCrumb";
import ItemDetail from "../ItemDetail/ItemDetail";
import Loader from "../Stateless/Loader/Loader";

const ItemDetailContainer = () => {
  const { itemDetail, loading } = useItemDetail();
  const navigation= [{nombre:'productos',path:'/productos'},{nombre:itemDetail.categoria,path:`/categoria/${itemDetail.categoria}`},{nombre:itemDetail.shortName,path:`/producto/${itemDetail.id}`}]
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="container mx-auto px-6">
          <BreadCrumb navigation={navigation} />
          {itemDetail ? (
            <ItemDetail itemdetail={itemDetail} />
          ) : (
            <h2 className="text-center mt-5">
              Ups no pudimos encontrar el producto que estaba buscando{" "}
            </h2>
          )}
        </div>
      )}
    </>
  );
};

export default ItemDetailContainer;
