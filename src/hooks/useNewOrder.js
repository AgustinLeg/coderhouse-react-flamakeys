import { useState } from "react";
import firebase from "firebase";
import { useCartContext } from "../context/cartContext";
import { getFirestore } from "../services/getFirebase";

const useNewOrder = () => {
  const db = getFirestore();
  const { items, total, setOrder } = useCartContext();
  const [errorCheckout, setErrorCheckout] = useState({
    estado: false,
    msg: "Ups hubo un error al finalizar la compra",
    items: [],
  });


  const newOrder = async (data, uid) => {
    let outOfStock = [];
    try {
      const itemsBuy = items.map((item) => ({
        nombre: item.nombre,
        id: item.id,
        cantidad: item.cantidad,
        precio: item.precio,
        imgURL: item.imgURL,
      }));
      const order = {
        comprador: data,
        items: itemsBuy,
        date: firebase.firestore.Timestamp.fromDate(new Date()),
        total,
        uid: uid,
      };

      const itemsToUpdate = db.collection("productos").where(
        firebase.firestore.FieldPath.documentId(),
        "in",
        items.map((i) => i.id)
      );
      const batch = db.batch();

      const query = await itemsToUpdate.get();
      query.docs.forEach((docSnapshot, idx) => {
        let snapshot = docSnapshot.data().stock;
        if (snapshot >= items[idx].cantidad) {
          batch.update(docSnapshot.ref, {
            stock: snapshot - items[idx].cantidad,
          });
        } else {
          outOfStock.push({ ...snapshot, id: docSnapshot.id });
        }
      });
      if (outOfStock.length === 0) {
        await batch.commit();
        return db
          .collection("orders")
          .add(order)
          .then((resp) => setOrder({ id: resp.id, order }))
          .catch((err) => console.error(err));
      } else {
        throw new Error("Ups hubo un error al finalizar la compra");
      }
    } catch (error) {
      setErrorCheckout({
        estado: true,
        msg: "Estos productos no tienen stock",
        items: outOfStock,
      });
      throw new Error("no hay stock");
    }
  };
  return { newOrder, errorCheckout };
};

export default useNewOrder;
