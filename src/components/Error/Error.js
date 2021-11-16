import React from "react";

const Error = ({msg}) => {
  return (
    <div className='text-center my-4 text-danger border border-danger rounded-0 p-2' role="alert">
      {msg}
    </div>
  );
};

export default Error;
