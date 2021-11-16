import React from "react";
import { useHistory } from "react-router";
import { useAuthContext } from "../../context/authContext";
import { useUserContext } from "../../context/userContext";

const UserDelete = () => {
  const { deleteUser, logout } = useAuthContext();
  const { user } = useUserContext();
  const history = useHistory();
  const handleClick = async () => {
    try {
      console.log(user.id);
      await deleteUser(user.id);
      history.push("/");
    } catch (error) {
      switch (error.code) {
        case "auth/requires-recent-login":
          alert("vuelve a ingresar, para borrar la cuenta");
          logout();
          history.push("/login");
          break;
        default:
          alert("Algo salio mal vuelve a ingresar");
          logout();
          history.push("/login");
          break;
      }
    }
  };

  return (
    <div>
      <div className="container mt-5 pt-5" style={{ maxWidth: "600px" }}>
        <h2 className="text-center my-5 pt-5">Borrar mi Cuenta</h2>
        <div
          className="alert alert-danger d-flex align-items-center"
          role="alert"
        >
          <div>
            Después de borrar una cuenta, esta se borra de manera permanente.
            Esta acción no se puede deshacer.
          </div>
        </div>
        <div className="row border">
          <div className="col-md-12">
            <small>Cuenta de usuario</small>
            <p>{user && user.email}</p>
          </div>
          <button
            type="button"
            className="btn btn-dark mt-3"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Eliminar Cuenta
          </button>

          <div
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Borrar Cuenta
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">Estas seguro?</div>
                <div className="modal-footer d-flex justify-content-between">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Cancelar
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger"
                    data-bs-dismiss="modal"
                    onClick={handleClick}
                  >
                    Borrar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(UserDelete);
