import React from "react";

import useForm from "../../../hooks/useForm";

import { useUserContext } from "../../../context/userContext";
import { TostMessage } from "../../../components/Alerts/Alerts";

const UserInfo = ({ callback, btnText }) => {
  const { user } = useUserContext();

  const { values, handleInputChange } = useForm({
    nombre: user?.nombre || "",
    apellido: user?.apellido || "",
    email: user?.email || "",
    telefono: user?.telefono || "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      values.nombre.trim() === "" ||
      values.apellido.trim() === "" ||
      values.email.trim() === "" ||
      values.telefono.trim() === ""
    ) {
      return TostMessage.fire({icon: "error", title:"Todos los campos son obligatorios"})
    }else{
      callback(values)
    }
  };

  return (
    <>
      <div className="flex-auto py-10 pt-0 relative z-10">
        <h6 className="text-gray-900 text-sm mt-3 mb-6 font-bold uppercase">
          Informacion Personal
        </h6>
        <form onSubmit={handleSubmit} className="items-center flex flex-col">
          <div className="flex flex-wrap p-5">
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-gray-600 text-xs font-bold mb-2"
                  htmlFor="inputNombre"
                >
                  Nombre
                </label>
                <input
                  type="text"
                  className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  id="inputNombre"
                  name="nombre"
                  value={values.nombre}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-gray-600 text-xs font-bold mb-2"
                  htmlFor="inputApellido"
                >
                  Apellido
                </label>
                <input
                  type="text"
                  className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  id="inputApellido"
                  name="apellido"
                  value={values.apellido}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-gray-600 text-xs font-bold mb-2"
                  htmlFor="correoInput"
                >
                  Email
                </label>
                {user ? <p
            type="text"
            className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
          >
            {values.email}
          </p>: <input
              type="email"
              className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              id="correoInput"
              name="email"
              value={values.email}
              onChange={handleInputChange}
              required
            /> }
                
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-gray-600 text-xs font-bold mb-2"
                  htmlFor="inputPhone"
                >
                  Telefono
                </label>
                <input
                  type="number"
                  className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  id="inputPhone"
                  name="telefono"
                  min={0}
                  value={values.telefono}
                  onChange={handleInputChange}
                />

                {values.telefono === "" && user ? (
                  <span className="text-sm mx-2">
                    No contamos con tu numero de celular
                  </span>
                ) : null}
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="bg-gray-700 hover:bg-gray-800 my-5 text-white font-bold py-2 px-4 border-b-4 border-gray-900 hover:border-blue rounded"
          >
            {btnText}
          </button>
        </form>
        <hr className="mt-6 border-b-1 border-gray-300" />
      </div>
    </>
  );
};

export default React.memo(UserInfo);
