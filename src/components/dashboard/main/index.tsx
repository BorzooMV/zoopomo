import React from "react";
import Box from "../../common/box";
import Informations from "../informations";
import Tasks from "../tasks";
import Timer from "../timer";
import { Root, Top } from "./index.style";

const Main = () => {
  return (
    <Root>
      <Top>
        <Box w={40}>
          <Tasks />
        </Box>
        <Box w={60}>
          <Timer />
        </Box>
      </Top>
      <Box w={100}>
        <Informations />
      </Box>
    </Root>
  );
};

export default Main;
