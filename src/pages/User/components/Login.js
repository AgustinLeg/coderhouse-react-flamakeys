import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import { useAuthContext } from "../../../context/authContext";

import useError from "../../../hooks/useError";
import useForm from "../../../hooks/useForm";

import Error from "../../../components/Alerts/Error";
import Spinner from "../../../components/Stateless/Spinner/Spinner";

const Login = () => {
  const { login, loginWithGoogle } = useAuthContext();
  const { error, newError } = useError();
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [msgError, setMsgError] = useState('');

  const {values, handleInputChange} = useForm({
    email: "",
    password: "",
  });
  const { email, password } = values;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email.trim() === "" || password.trim() === "") {
      newError();
      setMsgError("Todos los campos son obligatorios");
      return;
    }
    setLoading(true);
    try {
      await login(email, password);
      setLoading(false);
      history.push("/");
    } catch (error) {
      console.log(error.code);
      setLoading(false);
      newError();
      switch (error.code) {
        case "auth/user-not-found":
          setMsgError(
            "No encontramos ningun usuario con ese mail, Intenta crear una cuenta"
          );
          break;
        case "auth/wrong-password":
          setMsgError("El Mail o la Contraseña son incorrectos");
          break;
        case "auth/too-many-requests":
          setMsgError("Haz intentado muchas veces, intenta de nuevo en 5 minutos");
          break;
        default:
          setMsgError("Ups, algo salio mal intenta racargando la pagina");
          break;
      }
    }
  };

  const loginWithSocial = async () => {
    setLoading(true);
    try {
      await loginWithGoogle();
      setLoading(false);
      history.push("/");
    } catch (error) {
      setLoading(false);
      newError();
      setMsgError("Ups, algo salio mal intenta racargando la pagina");
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {loading && <Spinner />}
      <div className="grid place-items-center mx-2 my-20 sm:my-auto">
        <div
          className="w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12 
            px-6 py-10 sm:px-10 sm:py-6 
            bg-white rounded-lg shadow-md lg:shadow-lg"
        >
          <h2 className="text-center font-semibold text-3xl lg:text-4xl text-gray-800">
            Iniciar Sesion
          </h2>

          <form className="mt-10" onSubmit={handleSubmit}>
            <label
              htmlFor="email"
              className="block text-xs font-semibold text-gray-600 uppercase"
            >
              E-mail
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="tu correo electronico"
              autoComplete="email"
              value={email}
              onChange={handleInputChange}
              className="block w-full py-3 px-1 mt-2 
                    text-gray-800 appearance-none 
                    border-b-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
            />

            <label
              htmlFor="password"
              className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
            >
              Contraseña
            </label>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="contraseña"
              autoComplete="current-password"
              value={password}
              onChange={handleInputChange}
              className="block w-full py-3 px-1 mt-2 mb-4
                    text-gray-800 appearance-none 
                    border-b-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
            />
            {error && <Error msg={msgError} />}
            <button
              type="submit"
              className="w-full py-3 mt-10 bg-gray-800 rounded-sm
                    font-medium text-white uppercase
                    focus:outline-none hover:bg-gray-700 hover:shadow-none"
            >
              Iniciar Sesion
            </button>

            <div className="sm:flex sm:flex-wrap mt-8 sm:mb-4 text-sm text-center">
              <button type="button" className="flex-2  underline" onClick={loginWithSocial}>
                Continuar con Google
              </button>
              <p className="flex-1 text-gray-500 text-md mx-4 my-1 sm:my-auto">
                o
              </p>
              <Link to="/crear-cuenta" className="flex-2 underline"> Crear Cuenta</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
