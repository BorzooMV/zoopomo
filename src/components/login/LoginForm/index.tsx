import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { user_login } from "../../../redux/actions";
import Btn from "../../common/btn";
import Input from "../../common/input";
import { Root } from "./index.style";

const LoginForm = () => {
  const [username, setUsername] = useState<string | undefined>();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const login = (): void => {
    if (username) {
      dispatch(user_login(username));
      localStorage.setItem("user", username);
      navigate("/dashboard");
    }
  };

  const handleSubmitWithClick = () => {
    login();
  };

  const handleSubmitWithEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === "Enter") {
      login();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setUsername(e.target.value);
  };

  return (
    <Root>
      <Input
        fullwidth
        onChange={(e: any) => handleInputChange(e)}
        onKeyPress={(e: any) => handleSubmitWithEnter(e)}
      />
      <Btn onClick={handleSubmitWithClick}>submit</Btn>
    </Root>
  );
};

export default LoginForm;
