import React from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import Error from "../../../components/Error/Error";
import { useAuthContext } from "../../../context/authContext";
import useError from "../../../hooks/useError";
import useForm from "../../../hooks/useForm";

const Register = () => {
  const { register } = useAuthContext();
  const {values, handleInputChange, reset} = useForm({
    given_name: "",
    family_name: "",
    email: "",
    password: "",
    telefono: "",
  });
  console.log(handleInputChange)
  const { given_name, family_name, email, password, telefono } = values;
  const { error,msgError, newError } = useError();

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      given_name.trim() === "" ||
      family_name.trim() === "" ||
      email.trim() === "" ||
      password.trim() === "" ||
      telefono.trim() === ""
      ) {
        newError()
      newError("Todos los campos son obligatorios");
      return;
    } else if (password.trim().length <= 5) {
      newError()
      newError("la contrasena debe ser mayor a 6 caracteres");
    }
    try {
      await register(values);
      reset();
      history.push("/");
    } catch (error) {
      newError()
      switch (error.code) {
        case "auth/weak-password":
          newError("la contrasena debe ser mayor a 6 caracteres");
          break;
        case "auth/email-already-in-use":
          newError("Ya tenemos una cuenta registrado con ese mail");
          break;

        default:
          newError("Algo salio mal, intenta recargando la pagina");
          break;
      }
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <div className="w-full lg:w-6/12 px-4 mx-auto pt-6">
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white border-0">
          <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
            <div className="text-gray-400 text-center mb-3 font-bold">
              <h2 className="text-center font-semibold text-3xl lg:text-4xl my-10 text-gray-800">
                Crear mi Cuenta
              </h2>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-gray-600 text-xs font-bold mb-2"
                  htmlfor="inputName"
                >
                  Nombre
                </label>
                <input
                  type="text"
                  id="inputName"
                  className={`px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 border ${given_name === '' ? 'border-red-600' : 'border-green-600'}`}
                  placeholder="Nombre"
                  name="given_name"
                  value={given_name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-gray-600 text-xs font-bold mb-2"
                  htmlfor="inputFamilyName"
                >
                  Apellido
                </label>
                <input
                  type="text"
                  id="inputFamilyName"
                  className={`px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 border ${family_name === '' ? 'border-red-600' : 'border-green-600'}`}
                  placeholder="Apellido"
                  name="family_name"
                  value={family_name}
                  onChange={handleInputChange}
                />
              </div>

              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-gray-600 text-xs font-bold mb-2"
                  htmlfor="inputEmail"
                >
                  Email
                </label>
                <input
                  id="inputEmail"
                  type="email"
                  className={`px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 border ${email === '' ? 'border-red-600' : 'border-green-600'}`}
                  placeholder="Email"
                  name="email"
                  value={email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="relative w-full mb-3">
                <label
                  htmlFor="inputPhone"
                  className="block uppercase text-gray-600 text-xs font-bold mb-2"
                >
                  Telefono
                </label>
                <input
                  type="number"
                  className={`px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 border ${telefono === '' ? 'border-red-600' : 'border-green-600'}`}
                  id="inputPhone"
                  placeholder="123456789"
                  name="telefono"
                  value={telefono}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-gray-600 text-xs font-bold mb-2"
                  htmlfor="grid-password"
                >
                  Contraseña
                </label>
                <input
                  type="password"
                  className={`px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 border ${password.length === 0 || password.length <= 5 ? 'border-red-600' : 'border-green-600'}`}
                  placeholder="Contraseña"
                  name="password"
                  value={password}
                  onChange={handleInputChange}
                  autoComplete="false"
                />
              </div>

              <div>
                <label className="inline-flex items-center cursor-pointer">
                  <input
                    id="customCheckLogin"
                    type="checkbox"
                    className="form-checkbox border-0 rounded text-gray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                  />
                  <span className="ml-2 text-sm font-semibold text-gray-600">
                    Lei y Acepto las
                    <a href="google.com" className="text-red-500 ml-3">
                      Politicas y Privacidad
                    </a>
                  </span>
                </label>
              </div>
              {error && <Error msg={msgError}/>}
              <div className="text-center mt-6">
                <button
                  className="bg-gray-900 text-white active:bg-gray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 w-full ease-linear transition-all duration-150 mb-5"
                  type="submit"
                >
                  Crear Cuenta
                </button>

                <Link to="/login" className="flex-2 underline ">
                  Iniciar Sesion
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
