import React from "react";
import { Root } from "./index.style";

export interface IProps {
  children: React.ReactNode;
  w?: number;
}

const Box = ({ children, w }: IProps) => {
  return <Root w={w}>{children}</Root>;
};

export default Box;
