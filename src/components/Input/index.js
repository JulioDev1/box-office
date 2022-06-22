import React from "react";
import "./index.css";
const inputs = (props) => {
  return (
    <input
      className="allInput"
      type={props.type}
      placeholder={props.placeholder}
    />
  );
};
export default inputs;
