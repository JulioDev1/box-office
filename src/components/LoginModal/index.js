import React from "react";
import "./index.css";
import Input from "../Input";
import Button from "../Button";
const LoginModal = (props) => {
  let value = "dasdkçasdjsad";
  return (
    <div className="container-inputs">
      <h1>Login</h1>
      <Input type="text" placeholder="Write your email" />
      <Input type="password" placeholder="Password" />
      <Button className="button" value="login" />
    </div>
  );
};
export default LoginModal;
