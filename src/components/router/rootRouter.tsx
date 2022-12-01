import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { IRouter, ROUTERS } from ".";

const RootRouter = () => {
  return (
    <>
      <Routes>
        <Route path="*" element={<Navigate to="/book" />} />
        {ROUTERS.map((item: IRouter) => (
          <Route key={item.id} path={item.navigate} element={item.element} />
        ))}
      </Routes>
    </>
  );
};

export default RootRouter;
