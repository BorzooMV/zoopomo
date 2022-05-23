import React, { useEffect, useState } from "react";
import logoUrl from "../../../assets/Logo.png";
import {
  Root,
  LogoAndTagline,
  DateAndTime,
  LogoContainer,
  Img,
  TextsContainer,
  ZooPomo,
  Zoo,
  Pomo,
  Tagline,
} from "./index.style";

const Clock = () => {
  interface IState {
    hour: number;
    minute: number;
    theDate: string;
  }

  const [time, setTime] = useState<undefined | IState>();

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      const hour = date.getHours();
      const minute = date.getMinutes();
      const theDate = date.toLocaleDateString();

      setTime({ hour, minute, theDate });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <span>{time?.theDate}</span>
      <span>
        {time?.hour}:{time?.minute}
      </span>
    </>
  );
};

const Header = () => {
  return (
    <Root>
      <LogoAndTagline>
        <LogoContainer>
          <Img src={logoUrl} alt="Zoopomo" />
        </LogoContainer>
        <TextsContainer>
          <ZooPomo>
            <Zoo>Zoo</Zoo>
            <Pomo>Pomo</Pomo>
          </ZooPomo>
          <Tagline>Make the perfect without perfection</Tagline>
        </TextsContainer>
      </LogoAndTagline>
      <DateAndTime>
        <Clock />
      </DateAndTime>
    </Root>
  );
};

export default Header;
