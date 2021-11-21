import React, { useState } from "react";
import Swal from "sweetalert2";
// import withReactContent from "sweetalert2-react-content";
import { useAuthContext } from "../../../context/authContext";
import { TostMessage } from "../../../components/Alerts/Alerts";

const UserPassword = () => {
  const { updatePassword } = useAuthContext();
  const [password, setPassword] = useState({
    pass: "",
    confirmPass: "",
  });
  const { pass, confirmPass } = password;
  // const MySwal = withReactContent(Swal);

  
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (pass.trim() === "" || confirmPass.trim() === "") {
      return TostMessage.fire({icon: "warning", title:"Todos los campos son obligatorios"})
    }
    if (pass.trim() === confirmPass.trim()) {
      Swal.fire({
        title: "Estas seguro de cambiar la contraseña?",
        showCancelButton: true,
        confirmButtonText: "Actualizar",
        showLoaderOnConfirm: true,
        preConfirm: () => {
          return updatePassword(confirmPass)
            .then(() => {
              return TostMessage.fire({
                icon: "success",
                title: "Cambios guardados exitosamente",
              });
            })
            .catch((error) => {
              return TostMessage.fire({
                icon: "error",
                title: "Esta accion necesita que vuelvas a iniciar sesion",
              });
            });
        },
        allowOutsideClick: () => !Swal.isLoading(),
      });
    } else {
      TostMessage.fire({icon: "success", title:"Las contraseñas deben ser iguales"})
    }
  };

  return (
    <>
      <h6 className="text-gray-900 text-sm mt-3 mb-6 font-bold uppercase">
        Cambiar Contraseña
      </h6>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <div className="w-full flex flex-wrap items-center">
          <div className="w-full lg:w-2/4 px-4">
            <label
              className="block uppercase text-gray-600 text-xs font-bold mb-2"
              htmlFor="newPassword"
            >
              Contraseña
            </label>
            <input
              type="password"
              className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              value={pass}
              onChange={(e) =>
                setPassword({ ...password, pass: e.target.value.trim() })
              }
              autoComplete="true"
              id="newPassword"
              aria-describedby="new password"
            />
          </div>
          <div className="w-full lg:w-2/4 px-4 my-5">
            <label
              className="block uppercase text-gray-600 text-xs font-bold mb-2"
              htmlFor="confirmPassword"
            >
              Confirmar nueva contraseña
            </label>
            <input
              type="password"
              className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              value={confirmPass}
              autoComplete="true"
              onChange={(e) =>
                setPassword({ ...password, confirmPass: e.target.value.trim() })
              }
              id="confirmPassword"
            />
          </div>
        </div>
        <button
          type="submit"
          className="bg-gray-700 hover:bg-gray-800 my-5 text-white font-bold py-2 px-4 border-b-4 border-gray-900 hover:border-blue rounded"
        >
          Cambiar Contraseña
        </button>
      </form>
    </>
  );
};

export default UserPassword;
