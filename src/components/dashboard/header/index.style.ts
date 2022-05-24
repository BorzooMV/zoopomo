import styled from "styled-components";

export const Root = styled.div`
  position: relative;
  background: ${(props) => props.theme.palette.light};
  width: 100%;
  padding: 10px 88px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 45px;
`;

export const LogoAndTagline = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
`;

export const DateAndTime = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 20px;
  font-size: 2rem;
`;

export const LogoContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 50px;
  overflow: hidden;
`;

export const Img = styled.img`
  position: relative;
  width: 100%;
  height: auto;
`;

export const TextsContainer = styled.div`
  font-family: ${(props) => props.theme.font.styled};
`;

export const ZooPomo = styled.div``;

export const Zoo = styled.span`
  font-size: 2rem;
  color: ${(props) => props.theme.palette.secondary};
`;

export const Pomo = styled.span`
  font-size: 2.4rem;
  color: ${(props) => props.theme.palette.primary};
`;

export const Tagline = styled.span`
  font-size: 1.3rem;
`;
