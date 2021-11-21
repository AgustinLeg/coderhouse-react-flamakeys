import React from "react";
import { Link } from "react-router-dom";

const LinkButton = ({ onClick, path, color = "gray-900", text }) => {
  return (
    <Link
      to={path}
      className={`px-8 py-2 bg-${color} text-white text-sm font-medium rounded hover:bg-${color}-500 focus:outline-none focus:bg-gray-500 text-center`}
      onClick={onClick}
    >
      {text}
    </Link>
  );
};

export default LinkButton;
