import firebase from "firebase";
import { useState } from "react";
import { useCartContext } from "../context/cartContext";
import { getFirestore } from "../services/getFirebase";

const useNewOrder = () => {
  const db = getFirestore();
  const [errorCheckout, setErrorCheckout] = useState({msg:'',items:[]})
  const { items, total, setOrder } = useCartContext();
  const newOrder = async (data,uid) => {
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
    const itemsToUpdate = await db.collection("productos").where(
      firebase.firestore.FieldPath.documentId(),
      "in",
      items.map((i) => i.id)
    );
    const query = await itemsToUpdate.get();
    const batch = db.batch();
    let outOfStock = [];
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

      if (outOfStock.length > 0){
        setErrorCheckout({
          ...errorCheckout,
          msg:'Estos productos no tienen stock',
          items: outOfStock
        })
        throw new Error('Estos productos no tienen stock')
      }

      batch.commit();
      return db.collection("orders")
        .add(order)
        .then((resp) => setOrder({ id: resp.id, order }))
        .catch((err) => console.error(err));
  
  };

  return { newOrder, errorCheckout };
};

export default useNewOrder;
