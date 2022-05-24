import React from "react";
import Header from "../../components/dashboard/header";
import Main from "../../components/dashboard/main";
import { Root } from "./index.style";

const Dashboard = () => {
  return (
    <Root>
      <Header />
      <Main />
    </Root>
  );
};

export default Dashboard;
