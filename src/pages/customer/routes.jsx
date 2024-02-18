import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { AUTH_PATH, HOME_URL } from "../../constants/path";

import CustomerMain from "./components/layout/Main";
import SignInPage from "../auth/signin";
import SignUpPage from "../auth/signup";

import HomePage from "./home";

const HomeRouter = () => {
  return (
    <CustomerMain>
      <Routes>
        <Route path={AUTH_PATH.LOGIN} element={<SignInPage />} exact />
        <Route path={AUTH_PATH.REGISTER} element={<SignUpPage />} exact />
        <Route path={HOME_URL.INDEX} element={<HomePage />} exact />

        <Route path="/" element={<Navigate replace to={HOME_URL.INDEX} />} />
      </Routes>
    </CustomerMain>
  );
};
export default HomeRouter;
