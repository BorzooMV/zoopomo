import React from "react";
import { Root } from "./index.style";

export interface IProps {
  onKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onChange?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  fullwidth?: boolean;
}

const Input = ({ ...rest }) => {
  return <Root {...rest} />;
};

export default Input;
