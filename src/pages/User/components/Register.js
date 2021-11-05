import React from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import Error from "../../../components/Error/Error";
import { useAuthContext } from "../../../context/authContext";
import useError from "../../../hooks/useError";
import { useForm } from "../../../hooks/useForm";

const Register = () => {
  const { register } = useAuthContext();
  const [values, handleInputChange, reset] = useForm({
    given_name: "",
    family_name: "",
    email: "",
    password: "",
    telefono: "",
  });
  const { given_name, family_name, email, password, telefono } = values;
  const {error,newError} =useError()
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
      e.target.className += ' was-validated'
      return;
    }else if(password.trim().length <=5){
      newError('la contrasena debe ser mayor a 6 caracteres','warning')
    }
    try {
      await register(values);
      reset();
      history.push("/");
    } catch (error) {
      switch (error.code) {
        case 'auth/weak-password':
          newError('la contrasena debe ser mayor a 6 caracteres','warning')
          break;
        case 'auth/email-already-in-use':
          newError('Ya tenemos una cuenta registrado con ese mail','warning')
          break;
      
        default:
          newError('Algo salio mal, intenta recargando la pagina','danger')
          break;
      }
    }
  };

  return (
    <div className="container mt-5 pt-5" style={{ maxWidth: "800px" }}>
      <h2 className="title text-center my-5 fw-bold">Crear mi Cuenta</h2>
      <form className="row g-3 needs-validation" noValidate onSubmit={handleSubmit}>
        <div className="col-md-6">
          <label htmlFor="nombreValidacion" className="form-label">
            Nombre
          </label>
          <input
            type="text"
            className="form-control"
            id="nombreValidacion"
            name='given_name'
            value={given_name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="apellidoValidacion" className="form-label">
            Apellido
          </label>
          <input
            type="text"
            className="form-control"
            id="apellidoValidacion"
            name='family_name'
            value={family_name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="correoValidacion" className="form-label">
            Correo Electronico
          </label>
          <input
            type="email"
            className="form-control"
            id="correoValidacion"
            name='email'
            value={email}
            onChange={handleInputChange}
            required
          />
          <div className="invalid-feedback">Please provide a valid city.</div>
        </div>
        <div className="col-md-6">
          <label htmlFor="passwordValidacion" className="form-label">
            Contraseña
          </label>
          <input
            type="password"
            className="form-control"
            id="passwordValidacion"
            name='password'
            value={password}
            onChange={handleInputChange}
            autoComplete='false'
            required
          />
        </div>
        <div className="col-md-12">
          <label htmlFor="telefonoValidacion" className="form-label">
            Telefono
          </label>
          <input
            type="number"
            className="form-control"
            id="telefonoValidacion"
            name='telefono'
            value={telefono}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="col-12">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="invalidCheck"
              required
            />
            <label className="form-check-label" htmlFor="invalidCheck">
              Acepto los terminos y condiciones
            </label>
            <div className="invalid-feedback">
              Acepta antes de continuar.
            </div>
          </div>
        </div>
        {error.estado && <Error msg={error.msg} tipo={error.tipo}/>}
        <div className="col-12 d-flex flex-column justify-content center">
          <button type="submit" className="btn btn-primary my-4">
            Registrarme
          </button>
          <Link to="/login" className="btn">
            Iniciar Sesion
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
