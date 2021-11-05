import React, { useState } from "react";
import { useAuthContext } from "../../context/authContext";

const UserPassword = () => {
  const { updatePassword } = useAuthContext();
  const [password, setPassword] = useState({
    pass: "",
    confirmPass: "",
  });
  const [comment, setComment] = useState(false);
  const { pass, confirmPass } = password;
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (pass.trim() === "" || confirmPass.trim() === "") {
      setComment(false);
      return;
    }
    if (pass.trim() === confirmPass.trim()) {
      try {
        await updatePassword(confirmPass);
        setComment(true);
        setTimeout(() => {
          setComment(false);
        }, 2000);
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("son diferentes");
    }
  };
  return (
    <div className="position-relative h-100">
      <div className="container mt-5 pt-5" style={{ maxWidth: "600px" }}>
        <h2 className="text-center my-5 pt-5">Cambiar Contraseña</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="newPassword" className="form-label">
              Nueva Contraseña
            </label>
            <input
              type="password"
              className="form-control"
              value={pass}
              onChange={(e) =>
                setPassword({ ...password, pass: e.target.value.trim() })
              }
              id="newPassword"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">
              Reingresa la contraseña
            </label>
            <input
              type="password"
              className="form-control"
              value={confirmPass}
              onChange={(e) =>
                setPassword({ ...password, confirmPass: e.target.value.trim() })
              }
              id="confirmPassword"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Modificar Contraseña
          </button>
        </form>
        {comment && (
          <div class="alert alert-success mt-5" role="alert">
            Contraseña actualizada correctamente!
          </div>
        )}
      </div>
    </div>
  );
};

export default UserPassword;
