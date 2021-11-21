import React, { createContext, useContext, useEffect, useState } from "react";
import firebase from "firebase";
import { auth, getFirestore } from "../services/getFirebase";

const AuthContext = createContext();
export const useAuthContext = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState([]);
  const dbQuery = getFirestore();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
  }, [currentUser]);

  const newUser = (
    { email, given_name, family_name, telefono = "" },
    providerId,
    uid
  ) => {
    const user = {
      email,
      nombre: given_name,
      apellido: family_name,
      telefono,
      uid,
      providerId,
      rol: "cliente",
    };
    dbQuery.collection("usuarios").add(user);
  };

  const register = async (formUser) => {
    const { email, password } = formUser;
    const res = await auth.createUserWithEmailAndPassword(email, password);
    const {
      additionalUserInfo: { isNewUser, providerId },
      user: { uid },
    } = res;
    if (isNewUser) newUser(formUser, providerId, uid);
  };

  const login = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
  };

  const logout = () => auth.signOut();

  const loginWithGoogle = async () => {
    let google_provider = new firebase.auth.GoogleAuthProvider();
    const res = await auth.signInWithPopup(google_provider);
    const {
      additionalUserInfo: { profile, isNewUser, providerId },
      user: { uid },
    } = res;
    if (isNewUser) newUser(profile, providerId, uid);
    return res;
  };

  const deleteUser = (id) => {
    console.log(id)
    dbQuery.collection("usuarios").doc(id).delete();
    return auth.currentUser.delete();
  };

  const updatePassword = (password) => auth.currentUser.updatePassword(password);
  ;

  const updateUser = async (id, data) => {
    const user = await dbQuery.collection("usuarios").doc(id);
    return user.update(data)
  };

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        register,
        login,
        logout,
        loginWithGoogle,
        deleteUser,
        updatePassword,
        updateUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
