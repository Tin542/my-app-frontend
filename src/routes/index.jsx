import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { AUTH_PATH, ADMIN_PATH } from "../constants/path";

import AdminMain from "../pages/admin/components/layout/Main";
import SignInPage from "../pages/auth/signin";
import UserAdmin from "../pages/admin/user";
import TaskAdmin from "../pages/admin/task";
import Dashboard from "../pages/admin/dashboard";
import ProductAdmin from "../pages/admin/manageProduct"

const AppRouter = () => {
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
        path={ADMIN_PATH.TASK}
        element={
          <AdminMain>
            <TaskAdmin />
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
      <Route/>
      <Route path="/" element={<Navigate replace to={AUTH_PATH.LOGIN} />} />
    </Routes>
  );
};
export default AppRouter;
