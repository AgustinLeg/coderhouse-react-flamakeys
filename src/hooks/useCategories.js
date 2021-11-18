import { useEffect, useState } from "react";
import { getFirestore } from "../services/getFirebase";

const useCategories = () => {
  const [categories, setCategories] = useState(null);


  useEffect(() => {
    const db = getFirestore();
    const getCategories = async () => {
      try {
        const resp = await db.collection("categorias").get();
        const data = resp.docs.map((cat) => ({ id: cat.id, ...cat.data() }))
        setCategories(data)
      } catch (error) {
        console.error(error);
      }
    };
    getCategories();
  }, []);


  
  return { categories };
};

export default useCategories;
