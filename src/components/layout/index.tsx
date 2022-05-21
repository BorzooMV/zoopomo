import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../../pages/dashboard";
import Login from "../../pages/login";

const Layout = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Layout;
