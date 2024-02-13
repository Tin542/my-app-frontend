import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { AUTH_PATH, ADMIN_PATH, HOME_URL } from "../../constants/path";

import SignInPage from "../auth/signin";

import HomePage from "./home";

const HomeRouter = () => {
  return (
    <Routes>
      <Route path={AUTH_PATH.LOGIN} element={<SignInPage />} exact />
      <Route path={HOME_URL.INDEX} element={<HomePage />} exact />
      
      <Route path="/" element={<Navigate replace to={HOME_URL.INDEX} />} />
    </Routes>
  );
};
export default HomeRouter;
