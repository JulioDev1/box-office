import React from "react";
import "./index.css";
const Button = (props) => {
  const buttonClass = props.className;
  return <button className={buttonClass}>{props.value}</button>;
};
export default Button;
