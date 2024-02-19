import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import SignInView from "./view";
import { loginService } from "./services";
import { ADMIN_PATH, CUSTOMER_PATH } from "../../../constants/path";
import { ROLE_ADMIN, ROLE_CUSTOMER } from "../../../constants/app/role";
import { loginFail, loginSuccess } from "../../../notifications/auth.notification";

const SignIn = () => {

  const navigate = useNavigate();

  const onFinish = (values) => {
    if (values.username && values.password) {
      loginService(values)
        .then((rs) => {
          let result = rs.data;
          console.log(result);
          if (result.data.role === ROLE_CUSTOMER) {
            loginSuccess('Đăng nhập thành công')
            navigate(CUSTOMER_PATH.INDEX);
          }
        })
        .catch((err) => {
          console.log("Error:", err.response.data.msg);
          loginFail(err.response.data.msg)
        });
      // navigate(ADMIN_PATH.DASHBOARD);
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <SignInView
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    />
  );
};
export default SignIn;
