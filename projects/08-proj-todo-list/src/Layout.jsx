import React from "react";

import { Header } from "./components";

import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="p-[40px]">
      <Header />
      <div className="my-4"></div>
      <Outlet />
    </div>
  );
}

export default Layout;
