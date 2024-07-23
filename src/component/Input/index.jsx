import React from "react";
import "./styles.css";
const Input = ({ label, placeholder }) => {
  return (
    <div className=" flex column full-width">
      <label className=" black-text bold padding" padding>
        {label}
      </label>
      <input
        type="text"
        className="full-width rounded gray-bg padding input-box"
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
