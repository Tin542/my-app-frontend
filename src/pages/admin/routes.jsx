import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { AUTH_PATH, ADMIN_PATH } from "../../constants/path/index";

import AdminMain from "./components/layout/Main";

import SignInPage from "../auth/signin";
import UserAdmin from "./user";
import Dashboard from "./dashboard";
import ProductAdmin from "./manageProduct";

const HomeRouter = () => {
  return (
    <AdminMain>
      <Routes>
        <Route path={AUTH_PATH.LOGIN} element={<SignInPage />} exact />
        {/* Admin */}
        <Route path={ADMIN_PATH.DASHBOARD} element={<Dashboard />} exact />
        <Route path={ADMIN_PATH.USER} element={<UserAdmin />} exact />
        <Route path={ADMIN_PATH.PRODUCT} element={<ProductAdmin />} exact />
        <Route />
        <Route path="/" element={<Navigate replace to={ADMIN_PATH.DASHBOARD} />} />
      </Routes>
    </AdminMain>
  );
};
export default HomeRouter;
