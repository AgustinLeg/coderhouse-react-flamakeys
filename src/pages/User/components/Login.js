import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faUserLock } from "@fortawesome/free-solid-svg-icons";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "../../../hooks/useForm";
import Error from "../../../components/Error/Error";
import useError from "../../../hooks/useError";
import useAuthContext from "../../../context/authContext";

const Login = () => {
  const { login, loginWithGoogle} = useAuthContext();
  const {error,newError} = useError()
  const history = useHistory();

  const [values, handleInputChange] = useForm({
    email:'',
    password:''
  });
  const { email, password } = values;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(email.trim() === '' || password.trim() === ''){
      newError('Todos los campos son obligatorios','danger',2500)
      return;
    }
    try {
      await login(email, password);
      history.push("/");
    } catch (error) {
      console.log(error.code)
      switch(error.code){
        case 'auth/user-not-found':
          newError('No encontramos ningun usuario con ese mail, Intenta crear una cuenta','warning')
          break
        case 'auth/wrong-password':
          newError('El Mail o la Contraseña son incorrectos','warning')
          break;
        case 'auth/too-many-requests':
          newError('Haz intentado muchas veces, intenta de nuevo en 5 minutos','warning')
          break;
        default:
          newError('Ups, algo salio mal intenta racargando la pagina','danger')
          break;
      }
    }
  };
  
  const loginWithSocial = async() =>{
    await loginWithGoogle();
    history.push('/')
  }


  return (
    <div className="container my-5 pt-5">
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col" style={{ maxWidth: "600px" }}>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title text-center">Iniciar Sesion</h5>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="col-auto mb-3">
                  <div className="input-group">
                    <label
                      className="visually-hidden"
                      htmlFor="autoSizingInputGroup"
                    >
                      Contraseña
                    </label>
                    <div className="input-group-text">
                      <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      id="formGroupExampleInput"
                      placeholder="Ingresa tu correo..."
                      name="email"
                      value={email}
                      onChange={handleInputChange}
                    />
                    
                  </div>
                </div>
                <div className="col-auto mb-3">
                  <label
                    className="visually-hidden"
                    htmlFor="autoSizingInputGroup"
                  >
                    Contraseña
                  </label>
                  <div className="input-group">
                    <div className="input-group-text">
                      <FontAwesomeIcon icon={faUserLock}></FontAwesomeIcon>
                    </div>
                    <input
                      type="password"
                      className="form-control"
                      id="autoSizingInputGroup"
                      placeholder="Ingresa tu contraseña..."
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
                </div>
              </form>
            </div>
            <div className="card-body">
              <div className="card-text text-center d-flex flex-column justify-content-center align-items-center">
                <span>Iniciar Sesión con Redes Sociales</span>
                <div className="d-grid gap-2 w-100 my-3">
                  <button className="btn btn-danger" onClick={loginWithSocial}>Continuar con Google</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
