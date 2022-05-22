import styled from "styled-components";
import { IProps } from ".";

export const Root = styled.button<IProps>`
  font-size: 1.4rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all ease 200ms;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25);
  padding: ${(props) => (props.size === "sm" ? "8px 16px" : "16px 32px")};
  background: ${(props) =>
    props.variant === "contained"
      ? props.theme.palette.primary
      : props.variant === "outlined"
      ? "none"
      : props.theme.palette.primary};

  background-color: ${(props) => props.bg && props.theme.palette[props.bg]};
  color: ${(props) =>
    props.variant === "outlined" ? props.theme.palette.primary : "#fff"};
  color: ${(props) =>
    props.bg && props.variant === "outlined" && props.theme.palette[props.bg]};
  border: ${(props) =>
    props.variant === "outlined"
      ? `2px solid ${props.theme.palette.primary}`
      : "none"};
  border-color: ${(props) =>
    props.bg && props.variant === "outlined" && props.theme.palette[props.bg]};

  &:hover {
    filter: brightness(1.2);
  }
`;
