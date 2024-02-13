import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { AUTH_PATH, ADMIN_PATH, HOME_URL } from "../../constants/path/index";

import AdminMain from "./components/layout/Main";

import SignInPage from "../auth/signin";
import UserAdmin from "./user";
import Dashboard from "./dashboard";
import ProductAdmin from "./manageProduct";

const HomeRouter = () => {
  return (
    <Routes>
      <Route path={AUTH_PATH.LOGIN} element={<SignInPage />} exact />
      {/* Admin */}
      <Route
        path={ADMIN_PATH.DASHBOARD}
        element={
          <AdminMain>
            <Dashboard />
          </AdminMain>
        }
        exact
      />
      <Route
        path={ADMIN_PATH.USER}
        element={
          <AdminMain>
            <UserAdmin />
          </AdminMain>
        }
        exact
      />
      <Route
        path={ADMIN_PATH.PRODUCT}
        element={
          <AdminMain>
            <ProductAdmin />
          </AdminMain>
        }
        exact
      />
      <Route />
      <Route path="/" element={<Navigate replace to={HOME_URL.INDEX} />} />
    </Routes>
  );
};
export default HomeRouter;
