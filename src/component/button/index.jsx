import React, { Children } from "react";
import "./style.css";

export default function Button({ onClick, children }) {
  return (
    <button onClick={onClick} className="btn">
      {children}
    </button>
  );
}
