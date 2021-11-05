import { useEffect, useState } from "react";
import { useAuthContext } from "../context/authContext";
import { getFirestore } from "../services/getFirebase";

const useGetUser = () => {
  const { currentUser } = useAuthContext();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const db = getFirestore();
    setLoading(true);
    const getData = async () => {
      try {
        if (currentUser) {
          const resp = await db
            .collection("usuarios")
            .where("uid", "==", currentUser.uid)
            .get();
          let data = resp.docs.find((user) => user).data();
          setUser(data);
        }
      } catch (error) {
        setUser(null);
        console.log(error);
      }
      setLoading(false);
    };
    getData();
    return () => {
      setUser(null)
    }
  }, [currentUser]);

  // const getOrders = async() =>{
  //   try {
  //     if(currentUser){
  //       const resp = await db.collection('orders').get()

  //       const data = resp.docs.map(it => it.data())
  //       const items = data.filter(item => item.comprador.uid === currentUser.uid)
  //       items.forEach(it =>{
  //         console.log(it.items)
  //         setOrders(
  //           it.items
  //         )
  //       })

  //       // console.log(orders)y
  //     }
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }
  // getOrders()

  return { user, loading };
};

export default useGetUser;
