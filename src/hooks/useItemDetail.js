import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getFirestore } from "../services/getFirebase";

const useItemDetail = () => {
  const { id } = useParams();
  const [itemDetail, setItemDetail] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const db = getFirestore();
    setLoading(true);
    const getData = async () => {
      try {
        const resp = await db.collection("productos").doc(id).get();
        setItemDetail({ id: resp.id, ...resp.data() });
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, [id]);

  return { itemDetail, loading };
};

export default useItemDetail;
