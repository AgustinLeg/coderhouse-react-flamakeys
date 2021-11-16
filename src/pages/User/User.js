import React from "react";
import UserInfo from "./components/UserInfo";
import Spinner from '../../components/Stateless/Spinner/Spinner'
import { useUserContext } from "../../context/userContext";

const User = () => {
  const {user,loading} = useUserContext()
  return (
    <div className="container-fluid mt-5 pt-5">
      <div className="mt-5 pt-5">
        {loading
            ? <Spinner />
            : <>
              {user ? <UserInfo user={user}/> : 'Inicia Sesion'}
            </>
        }
      </div>
    </div>
  )
};

export default User;
