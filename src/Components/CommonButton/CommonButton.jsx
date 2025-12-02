import React from "react";

const CommonButton = ({ name, type = "button", ...rest }) => {
  return (
    <button
      type={type}
      className="btn btn-block bg-primary hover:bg-primary/90 text-primary-content font-semibold border-none shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-primary/50"
      {...rest}>
      {name}
    </button>
  );
};

export default CommonButton;
