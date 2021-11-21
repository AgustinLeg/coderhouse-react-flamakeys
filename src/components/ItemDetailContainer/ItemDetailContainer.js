import React from "react";
import useItemDetail from "../../hooks/useItemDetail";
import ItemDetail from "../ItemDetail/ItemDetail";
import NavBreadCumb from "../NavBreadCumb/NavBreadCumb";
import Loader from "../Stateless/Loader/Loader";

const ItemDetailContainer = () => {
  const { itemDetail, loading } = useItemDetail();
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="container mx-auto px-6">
          <NavBreadCumb navigation={[itemDetail.categoria]} />
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
