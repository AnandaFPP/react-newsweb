import React from "react";
import Home from "../../pages/Home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { SkeletonTheme } from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'


const Router = () => {
  return (
    <>
      <SkeletonTheme baseColor="#9DB2BF" highlightColor="#444">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace="true" />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </SkeletonTheme>
    </>
  );
};

export default Router;
