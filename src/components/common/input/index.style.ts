import styled from "styled-components";
import { IProps } from ".";

export const Root = styled.input<IProps>`
  position: relative;
  padding: 16px 32px;
  border-radius: 10px;
  background: #fff;
  font-size: 1.6rem;
  border: 2px solid ${(props) => props.theme.palette.dark};
  width: ${(props) => props.fullwidth && "100%"};
`;
