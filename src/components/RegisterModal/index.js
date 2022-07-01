import React from "react";
import "./index.css";
import Button from "../Button";
import Input from "../Input";
const RegisterModal = (props) => {
  return (
    <div className="register--modal">
      <h1>Cadastro</h1>
      <Input type="text" placeholder="E-mail" />
      <Input type="text" placeholder=" repeat your email" />
      <Input type="text" placeholder="Password" />
      <Input type="text" placeholder=" repeat your password" />
      <Button value="click to confirm" />
    </div>
  );
};
export default RegisterModal;
