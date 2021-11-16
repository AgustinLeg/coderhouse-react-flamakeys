import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getFirestore } from "../services/getFirebase";

const useGetProducts = () => {
  const {categoria} = useParams()
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    const db = getFirestore();
    setLoading(true);
    const getData = async () =>{
      try {
        let resp = []
        if(categoria){
          resp = await db.collection('productos').where('categoria','==',categoria).get()
        }else{
          resp = await db.collection('productos').get()
        }
        setItems(resp.docs.map(item => ({id: item.id, ...item.data()})))
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error(error);
        setItems([]);
      }
      
    }
    getData()
  }, [categoria]);

  return { items, categoria, loading };
};

export default useGetProducts;
