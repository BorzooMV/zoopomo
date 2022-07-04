import {
  AvTimer,
  CheckCircleOutline,
  DeleteForeverOutlined,
} from "@mui/icons-material";
import React, { useState } from "react";
import { Input, Root } from "./Task.style";

export interface IProps {
  title: string;
}

export default function Task({ title }: IProps) {
  const [inputTitle, setInputTitle] = useState(title);

  function handleChangeInput(event: React.FormEvent<HTMLInputElement>) {
    setInputTitle(event.currentTarget.value);
  }
  return (
    <Root>
      <Input value={inputTitle} onChange={handleChangeInput} />
      <CheckCircleOutline fontSize="large" />
      <AvTimer fontSize="large" />
      <DeleteForeverOutlined fontSize="large" />
    </Root>
  );
}
