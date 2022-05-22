import React, { ReactNode } from "react";
import { Root } from "./index.style";

export interface IProps {
  children: ReactNode;
  variant?: string;
  bg?: string;
  size?: string;
  onClick?: () => void;
}

const Btn = ({ children, ...rest }: IProps) => {
  return <Root {...rest}>{children}</Root>;
};

export default Btn;
