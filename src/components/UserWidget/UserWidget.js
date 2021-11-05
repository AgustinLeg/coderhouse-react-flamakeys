import { faUserAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import { useAuthContext } from "../../context/authContext";

const UserWidget = () => {
  const { currentUser, logout } = useAuthContext();
  const history = useHistory();

  const cerrarSesion = () => {
    logout();
    history.push("/");
  };

  return (
    <>
      {currentUser ? (
        <div className="btn-group" role="group">
          <button
            id="btnGroupDrop1"
            type="button"
            className="btn btn-dark dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Mi Cuenta
          </button>
          <ul className="dropdown-menu" aria-labelledby="btnGroupDrop1">
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

export default UserWidget;
