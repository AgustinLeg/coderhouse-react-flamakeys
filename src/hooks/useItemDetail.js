import { useEffect, useState } from "react";
import { useParams } from "react-router";

const useItemDetail = (items) => {
  const { id } = useParams();
  const [itemDetail, setItemDetail] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getItem = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (items.length > 0) {
          const item = items.find((i) => i.id === Number(id));
          if (item) {
            resolve(item);
          } else {
            reject("no encontramos el producto");
            setItemDetail(null);
          }
        }
       
      }, 1500);
    });
    getItem
      .then((res) => {
        setItemDetail(res);
        setLoading(false)
      })
      .catch((err) => console.error(err));
  }, [items, id]);

  return { itemDetail, loading };
};

export default useItemDetail;
