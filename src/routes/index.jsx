import React from "react";
import { Routes, Route, Navigate, Redirect } from "react-router-dom";

import { AUTH_PATH, ADMIN_PATH } from "../constants/path";

import Main from "../pages/admin/components/layout/Main";
import SignInPage from "../pages/auth/signin";
import UserAdmin from "../pages/admin/user";

const AppRouter = () => {
  return (
    <Routes>
      <Route path={AUTH_PATH.LOGIN} element={<SignInPage />} exact />
      <Route
        path={ADMIN_PATH.USER}
        element={
          <UserAdmin />
        }
        exact
      />

      <Route path="/" element={<Navigate replace to={AUTH_PATH.LOGIN} />} />
    </Routes>
  );
};
export default AppRouter;