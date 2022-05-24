import styled from "styled-components";
import { IProps } from "./index";

export const Root = styled.div<IProps>`
  position: relative;
  padding: 20px;
  background: ${(props) => props.theme.palette.light};
  border-radius: 10px;
  width: ${(props) => (props.w ? props.w + "%" : "fit-content")};
  box-shadow: 0px 2px 4px rgb(0 0 0 / 50%);
`;
