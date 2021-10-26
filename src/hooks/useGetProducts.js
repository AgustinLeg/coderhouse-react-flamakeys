import { useEffect, useState } from "react";
import productos from "../data/productos";

const useGetProducts = () =>{
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
      setLoading(true)
      const getItems = new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(productos);
          }, 1500);
        });
        getItems.then((res) => {
          setItems(res);
          setLoading(false)
        });
    }, [items])

    return {items, loading}
}

export default useGetProducts;