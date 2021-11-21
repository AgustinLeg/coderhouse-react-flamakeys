import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import { useUserContext } from "../../context/userContext";
import { useAuthContext } from "../../context/authContext";

import UserInfo from "./components/UserInfo";
import Loader from "../../components/Stateless/Loader/Loader";
import UserPassword from "./components/UserPassword";
import UserDelete from "./components/UserDelete";

const User = () => {
  const { user, loading } = useUserContext();
  const { updateUser } = useAuthContext();

  const MySwal = withReactContent(Swal);
  const submitUpdate = async (values) => {
    Swal.fire({
      title: "Estas seguro de hacer estos cambios?",
      showCancelButton: true,
      confirmButtonText: "Actualizar",
      showLoaderOnConfirm: true,
      preConfirm: () => {
        return updateUser(user.id, values)
          .then(() => {
            return MySwal.fire(<p>Cambios guardados con exito</p>);
          })
          .catch((error) => {
            Swal.showValidationMessage(`Hubo un error, intenta mas tarde`);
          });
      },
      allowOutsideClick: () => !Swal.isLoading(),
    });
  };

  return (
    <div className="container-fluid">
      {loading ? (
        <Loader />
      ) : (
        <>
          {user ? (
            <div className="w-full lg:w-8/12 px-4 mx-auto">
              <div className="rounded-t bg-white mb-0 py-6">
                <div className="text-center flex justify-between">
                  <h6 className="text-gray-900 text-3xl font-bold">
                    Mi Cuenta
                  </h6>
                  <Link
                    to="/mi-cuenta/pedidos"
                    className="bg-red-500 text-white hover:bg-red-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none mr-1 ease-linear transition-all duration-150"
                    type="button"
                  >
                    Mis Pedidos
                  </Link>
                </div>
              </div>
              <UserInfo callback={submitUpdate} btnText="Actualizar Perfil" />
              <UserPassword />
              <UserDelete />
            </div>
          ) : (
            "Inicia Sesion"
          )}
        </>
      )}
    </div>
  );
};

export default User;
