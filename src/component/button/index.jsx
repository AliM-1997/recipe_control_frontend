import React from "react";

const Button = ({ label, color = "blue-bg", textcolor = "white-text" }) => {
  return (
    <div>
      <button className={` rounded full-width padding ${color} ${textcolor}`}>
        {label}
      </button>
    </div>
  );
};

export default Button;
