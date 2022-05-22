import React from "react";
import imageUrl from "../../../assets/Logo.png";
import { Root, Img } from "./index.style";

const Logo = () => {
  return (
    <Root>
      <Img src={imageUrl} alt="zoopomo logo" />
    </Root>
  );
};

export default Logo;
