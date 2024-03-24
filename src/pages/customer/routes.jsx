import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { AUTH_PATH, CUSTOMER_PATH } from "../../constants/path";

import CustomerMain from "./components/layout/Main";
import SignInPage from "../auth/signin";
import SignUpPage from "../auth/signup";

import HomePage from "./home";
import ProductPage from "./product";
import ServicePage from "./services";
import BlogPage from "./blog";

const HomeRouter = () => {
  return (
    <CustomerMain>
      <Routes>
        <Route path={AUTH_PATH.LOGIN} element={<SignInPage />} exact />
        <Route path={AUTH_PATH.REGISTER} element={<SignUpPage />} exact />
        <Route path={CUSTOMER_PATH.INDEX} element={<HomePage />} exact />
        <Route path={CUSTOMER_PATH.PRODUCT} element={<ProductPage />} exact />
        <Route path={CUSTOMER_PATH.SERVICES} element={<ServicePage />} exact />
        <Route path={CUSTOMER_PATH.BLOG} element={<BlogPage />} exact />

        <Route path="/" element={<Navigate replace to={CUSTOMER_PATH.INDEX} />} />
      </Routes>
    </CustomerMain>
  );
};
export default HomeRouter;
