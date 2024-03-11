import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import SignInView from "./view";
import { loginService } from "./services";
import { handleLogin } from "../../../redux-flow/action";
import { ADMIN_PATH, CUSTOMER_PATH } from "../../../constants/path";
import { ROLE_ADMIN, ROLE_CUSTOMER } from "../../../constants/app/role";
import {
  loginFail,
  loginSuccess,
} from "../../../notifications/auth.notification";

const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onFinish = (values) => {
    if (values.username && values.password) {
      loginService(values)
        .then((rs) => {
          let result = rs.data.data;
          if (result.role === ROLE_CUSTOMER) {
            dispatch(
              handleLogin({
                username: result.username,
                fullname: result.fullname,
                role: result.role,
                refresh_token: result.refresh_token,
                access_token: result.access_token
              })
            );
            loginSuccess("Đăng nhập thành công");
            navigate(CUSTOMER_PATH.INDEX);
          }
        })
        .catch((err) => {
          console.log("Error:", err.response.data.msg);
          loginFail(err.response.data.msg);
        });
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return <SignInView onFinish={onFinish} onFinishFailed={onFinishFailed} />;
};
export default SignIn;
