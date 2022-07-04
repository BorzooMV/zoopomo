import styled from "styled-components";

export const Root = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
`;

export const Input = styled.input`
  width: 290px;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 10px;
  border: none;
  border: 2px solid;
  border-color: ${(props) => props.theme.palette.dark};
`;
