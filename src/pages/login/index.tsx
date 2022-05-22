import React from "react";
import LoginForm from "../../components/login/LoginForm";
import Logo from "../../components/login/logo";
import Note from "../../components/login/note";
import { Root } from "./index.style";

const Login = () => {
  return (
    <Root>
      <Logo />
      <Note />
      <LoginForm />
    </Root>
  );
};

export default Login;
