import styled from "styled-components";

export const Root = styled.div`
  width: 630px;
  height: 319px;
  border-radius: 10px;
  background: ${(props) => props.theme.palette.light};
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
