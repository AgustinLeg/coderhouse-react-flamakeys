import React from "react";

const Error = ({ msg,tipo}) => {
  return (
    <div className={`alert alert-${tipo} text-center my-4`} role="alert">
      {msg}
    </div>
  );
};

export default Error;
