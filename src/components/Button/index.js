import React from "react";
import "./index.css";
const Button = (props) => {
  const buttonClass = props.className;
  const onClick = props.onClick;
  return <button className={buttonClass} onClick = {onClick}>{props.value}</button>;
};
export default Button;
