import React from "react";

const Error = ({ msg }) => {
  return (
    <div
      className="bg-red-100 border border-red-400 text-red-700 my-5 px-4 py-3 rounded relative"
    >
      <span className="block sm:inline">{msg}</span>
    </div>
  );
};

export default Error;
