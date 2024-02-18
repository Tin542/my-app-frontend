import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import SignInView from "./view";
import { AUTH_PATH } from "../../../constants/path";

const SignUp = () => {
  const [errMsg, setErrMsg] = useState("");

  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log("Success:", values);
    if (values.username && values.password) {
      navigate(AUTH_PATH.LOGIN);
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
export default SignUp;
