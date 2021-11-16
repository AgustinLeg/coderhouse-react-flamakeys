import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import { useAuthContext } from "../../../context/authContext";

import useError from "../../../hooks/useError";
import { useForm } from "../../../hooks/useForm";

import Error from "../../../components/Error/Error";
import Spinner from "../../../components/Stateless/Spinner/Spinner";

const Login = () => {
  const { login, loginWithGoogle} = useAuthContext();
  const {error,newError} = useError()
  const history = useHistory();
  const [loading, setLoading] = useState(false)

  const [values, handleInputChange] = useForm({
    email:'',
    password:''
  });
  const { email, password } = values;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(email.trim() === '' || password.trim() === ''){
      newError('Todos los campos son obligatorios',2500)
      return;
    }
    setLoading(true)
    try {
      await login(email, password);
      setLoading(false)
      history.push("/");
    } catch (error) {
      console.log(error.code)
      setLoading(false)
      switch(error.code){
        case 'auth/user-not-found':
          newError('No encontramos ningun usuario con ese mail, Intenta crear una cuenta')
          break
        case 'auth/wrong-password':
          newError('El Mail o la Contraseña son incorrectos')
          break;
        case 'auth/too-many-requests':
          newError('Haz intentado muchas veces, intenta de nuevo en 5 minutos')
          break;
        default:
          newError('Ups, algo salio mal intenta racargando la pagina')
          break;
      }
    }
  };
  
  const loginWithSocial = async() =>{
    setLoading(true)
    try {
      await loginWithGoogle();
      setLoading(false)
      history.push('/')
    } catch (error) {
      setLoading(false)
      newError('Ups, algo salio mal intenta racargando la pagina')
    }
  }


  return (
    <div className="container my-5 pt-5">
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col" style={{ maxWidth: "500px" }}>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title fw-bold fs-3 text-black">Iniciar Sesion</h5>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="col-auto mb-4">
                  <div className="input-group">
                    <label
                      className="w-100 fw-bold text-uppercase"
                      style={{letterSpacing:"3px"}}
                      htmlFor="autoSizingInputGroup"
                    >
                      Email
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="formGroupExampleInput"
                      name="email"
                      value={email}
                      onChange={handleInputChange}
                    />
                    
                  </div>
                </div>
                <div className="col-auto mb-4">
                  <label
                    className="w-100 fw-bold text-uppercase"
                    style={{letterSpacing:"3px"}}
                    htmlFor="autoSizingInputGroup"
                  >
                    Contraseña
                  </label>
                  <div className="input-group">
                    <input
                      type="password"
                      className="form-control"
                      id="autoSizingInputGroup"
                      autoComplete="false"
                      name="password"
                      value={password}
                      onChange={handleInputChange}
                    />
                  </div>
                  {error.estado && <Error msg={error.msg} tipo={error.tipo}/>}
                </div>
                <div className="col-auto d-flex justify-content-between my-2">
                  <Link to="/crear-cuenta" className="btn"> Crear Cuenta</Link>
                  <button className="btn">Olvide mi contraseña</button>
                </div>
                <div className="col-auto">
                  <button className="btn btn-dark w-100" type="submit">
                    Iniciar Sesion
                  </button>
                  <button className="btn btn-danger w-100 mt-3" onClick={loginWithSocial}>Continuar con Google</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {loading && <div className='position-fixed bg-dark w-100 h-100 top-0 end-0 zindex-dropdown bg-opacity-25'><Spinner /></div>}
    </div>
  );
};

export default Login;
