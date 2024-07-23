import React from "react";

const Button = ({
  children,
  color = "blue-bg",
  textcolor = "white-text",
  onMouseClick,
}) => {
  return (
    <div>
      <button
        onClick={onMouseClick}
        className={` rounded full-width padding clickable ${color} ${textcolor} `}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
