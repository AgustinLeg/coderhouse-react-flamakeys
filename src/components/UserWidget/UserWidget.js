import React from "react";
import { Link, NavLink, useHistory } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserAlt } from "@fortawesome/free-solid-svg-icons";

import { useAuthContext } from "../../context/authContext";

const UserWidget = ({setLoading}) => {
  const { currentUser, logout } = useAuthContext();
  const history = useHistory();


  console.log(currentUser)
  const cerrarSesion = async () => {
    setLoading(true)
    try {
      await logout();
      setLoading(false)
      history.push("/");
    } catch (error) {
      setLoading(false)
      console.error(error)
    }
  };

  return (
    <>
      {currentUser ? (
        <div className="btn-group" role="group">
          <button
            id="userDrop"
            type="button"
            className="btn btn-dark dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Mi Cuenta
          </button>
          <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="userDrop">
            <li>
              <Link to="/mi-cuenta" className="dropdown-item">
                Configurar Cuenta
              </Link>
            </li>
            <li>
              <button onClick={cerrarSesion} className="dropdown-item">
                Cerrar Sesion
              </button>
            </li>
          </ul>
        </div>
      ) : (
        <NavLink
          to="/login"
          className="text-black text-decoration-none text-center d-flex justify-content-center flex-column flex-md-row align-items-center"
        >
          <FontAwesomeIcon
            icon={faUserAlt}
            className="fs-4 mx-2 d-block"
          ></FontAwesomeIcon>
          Iniciar Sesion
        </NavLink>
      )}
    </>
  );
};

export default React.memo(UserWidget);
