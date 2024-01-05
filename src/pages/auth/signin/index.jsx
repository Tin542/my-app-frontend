import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import SignInView from "./view";
import { ADMIN_PATH } from "../../../constants/path";

const SignIn = () => {
  const [errMsg, setErrMsg] = useState("");

  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log("Success:", values);
    if (values.username && values.password) {
      navigate(ADMIN_PATH.USER);
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <SignInView
      errMsg={errMsg}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    />
  );
};
export default SignIn;
