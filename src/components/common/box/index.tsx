import React from "react";
import { Root, Title } from "./index.style";

export interface IProps {
  children: React.ReactNode;
  title?: string;
}

export default function Box({ children, title }: IProps) {
  return (
    <Root>
      <Title>{title}</Title>
      {children}
    </Root>
  );
}
