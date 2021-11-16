import React, { createContext, useContext, useEffect, useState } from "react";
import { useAuthContext } from "./authContext";
import { getFirestore } from "../services/getFirebase";

const UserContext = createContext();
export const useUserContext = () => useContext(UserContext);

const UserProvider = ({ children }) => {
  const { currentUser } = useAuthContext();
  const [user, setUser] = useState(null);
  const [orders, setOrders] = useState([])
  const db = getFirestore();


  useEffect(() => {    
    const getData = () => {
      try {
        if(currentUser){
          db.collection("usuarios")
            .where("uid", "==", currentUser.uid)
            .get()
            .then((resp) => {
              const data = resp.docs.map((user) => ({
                id: user.id,
                ...user.data(),
              }));
              setUser(data[0]);
            });
        // ORDERS
        db.collection('orders').where('uid','==', currentUser.uid).get()
        .then((resp) => {
          const data = resp.docs.map((order) => ({
            id: order.id,
            fecha: order.data().date.toDate().toString().slice(3,16),
            ...order.data(),
          }));
          setOrders(data);
        })
        .catch((error) => {console.error('no pudimos obtener los pedidos',error)})
        }
      } catch (error) {
        setUser(null);
        console.error('No estas logeado, porfavor inicia sesion o crea una cuenta');
      }
    };
    getData();
    return () => {
      setUser(null);
    };
  }, [currentUser,db]);

  


  
  return (
    <UserContext.Provider
      value={{
        user,
        orders,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
