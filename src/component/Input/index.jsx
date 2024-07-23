import React from "react";
import "./styles.css";
const Input = ({ label, placeholder, onChange, value, type }) => {
  return (
    <div className=" flex column full-width">
      <label className=" black-text bold padding">{label}</label>
      <input
        value={value}
        onChange={onChange}
        type={type}
        className=" rounded gray-bg padding input-box"
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
