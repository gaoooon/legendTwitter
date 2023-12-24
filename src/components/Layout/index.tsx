import React from "react";
import { Outlet } from "react-router";

const index: React.FC = () => {
  return (
    <>
      <div>layout</div>
      <Outlet />
    </>
  );
};

export default index;
