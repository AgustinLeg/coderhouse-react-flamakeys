import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserAlt } from "@fortawesome/free-solid-svg-icons";

import { useAuthContext } from "../../context/authContext";
import { TostMessage } from "../Alerts/Alerts";
import Spinner from "../Stateless/Spinner/Spinner";

const UserWidget = () => {
  const { currentUser, logout } = useAuthContext();
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const cerrarSesion = () => {
    setLoading(true);
    logout()
      .then(() => {
        setLoading(false);
        TostMessage.fire({ icon: "success", title: "Sesion Cerrada" });
        history.push("/");
      })
      .catch((error) => {
        setLoading(false);
        return TostMessage.fire({
          icon: "error",
          title: "Ups hubo un error",
          text: error,
        });
      });
  };
  if (currentUser) {
    return (
      <>
        {loading && <Spinner />}
        <div className="group mx-2 flex items-center">
          <button className="outline-none focus:outline-none">
            <FontAwesomeIcon icon={faUserAlt}></FontAwesomeIcon>
            <span></span>
          </button>
          <ul
            className="bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute 
  right-5 top-14 transition duration-150 ease-in-out origin-top min-w-32 text-sm"
          >
            <li className="rounded-sm px-3 py-1 hover:bg-gray-100 cursor-pointer hover:text-red-700">
              <Link to="/mi-cuenta">Configurar</Link>
            </li>
            <li
              className="rounded-sm px-3 py-1 hover:bg-gray-100 cursor-pointer hover:text-red-700"
              onClick={cerrarSesion}
            >
              Cerrar Sesion
            </li>
          </ul>
        </div>
      </>
    );
  }
  return (
    <div
      className="flex mx-2 lg:w-2/5 items-center justify-end"
    >
      <Link to="/login" className="flex items-center hover:text-red-700">
        <FontAwesomeIcon icon={faUserAlt}></FontAwesomeIcon>
      </Link>
    </div>
  );
};

export default UserWidget;
