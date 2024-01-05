import React from "react";
import { Button, Checkbox, Form, Flex, Typography } from "antd";

import FloatLabelInput from "../../../components/floatingLabelInput/FloatingLabelInput.component";
import {username, password} from './validate';
import "./styles/styles.css";

const SignInView = (props) => {
  const { onFinish, onFinishFailed } = props;
  return (
    <div className="App">
      <Form
        className="form-sigin"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off">
        <Typography.Title style={{ textAlign: "center" }}>
          Đăng nhập
        </Typography.Title>
        <Form.Item name="username" rules={username}>
          <FloatLabelInput
            type="text"
            label="Tài khoản"
            placeholder="Tài khoản"
          />
        </Form.Item>

        <Form.Item name="password" rules={password}>
          <FloatLabelInput
            type="password"
            label="Mật khẩu"
            placeholder="Mật khẩu"
          />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked">
          <Checkbox>Ghi nhớ</Checkbox>
        </Form.Item>

        <Form.Item>
          <Flex
            vertical
            gap="small"
            style={{
              width: "100%",
            }}>
            <Button
              className="btn-signin"
              type="primary"
              htmlType="submit"
              block>
              Đăng nhập
            </Button>
          </Flex>
        </Form.Item>
      </Form>
    </div>
  );
};
export default SignInView;
