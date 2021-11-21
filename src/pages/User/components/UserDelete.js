import React from "react";
import Swal from "sweetalert2";
import { useHistory } from "react-router";

import { useAuthContext } from "../../../context/authContext";
import { useUserContext } from "../../../context/userContext";

import { TostMessage } from "../../../components/Alerts/Alerts";

const UserDelete = () => {
  const { deleteUser, logout } = useAuthContext();
  const { user } = useUserContext();
  const history = useHistory();

 
  const handleClick = async () => {
    Swal.fire({
      title: "Estas seguro de eliminar tu cuenta?",
      showCancelButton: true,
      cancelButtonText: "Cancelar",
      confirmButtonText: "Eliminar",
      confirmButtonColor:'red',
      showLoaderOnConfirm: true,
      preConfirm: () => {
        return deleteUser(user.id)
          .then(() => {
            history.push("/");
            return TostMessage.fire({icon: "success", title:"Cuenta eliminada"})
          })
          .catch((error) => {
            switch (error.code) {
              case "auth/requires-recent-login":
                TostMessage.fire({icon: "error", title:"error", text:"vuelve a ingresar, para borrar la cuenta"});
                logout();
                history.push("/login");
                break;
              default:
                TostMessage.fire({icon: "error", title:"Algo salio mal vuelve a ingresar"});
                logout();
                history.push("/login");
                break;
            }
            Swal.showValidationMessage(`Hubo un error, intenta mas tarde`);
          });
      },
      allowOutsideClick: () => !Swal.isLoading(),
    });
  };

  return (
    <div>
      <div className="border border-red-500 mt-10 p-5">
        <h2 className="text-3xl font-bold text-center my-5">
          Borrar mi Cuenta
        </h2>
        <div className="text-center">
          <div>
            Después de borrar una cuenta, esta se borra de manera permanente.
            Esta acción no se puede deshacer.
          </div>
        </div>
        <div className="w-full px-4 my-5 flex flex-wrap items-center justify-between">
          <div className="relative w-full lg:w-3/4">
            <p className="block uppercase text-gray-600 text-xs font-bold mb-2">
              Cuenta de Usuario
            </p>
            <p className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
              {user && user.email}
            </p>
          </div>
          <button
            type="button"
            className="bg-red-700 hover:bg-red-800 mt-5 text-white font-bold py-2 px-4 border-b-4 w-full border-red-900 hover:border-blue rounded"
            onClick={handleClick}
          >
            Eliminar Cuenta
          </button>
        </div>
      </div>
    </div>
  );
};

export default React.memo(UserDelete);
