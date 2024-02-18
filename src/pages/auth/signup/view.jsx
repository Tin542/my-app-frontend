import React from "react";
import { Button, Input, Form, Flex, Typography, ConfigProvider } from "antd";
import { Link } from "react-router-dom";

import { username, password, fullname, email } from "./validate";
import { AUTH_PATH } from "../../../constants/path";
import "./styles/styles.css";

const SignUpView = (props) => {
  const { onFinish, onFinishFailed } = props;
  const { Text } = Typography;
  return (
    <div className="login-container">
      <ConfigProvider
        theme={{
          components: {
            Input: {
              /* here is your component tokens */
            },
          },
        }}>
        <Form
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off">
          <Typography.Title type="success" className="login-title">
            Đăng ký
          </Typography.Title>
          <Form.Item name="username" rules={username}>
            <Input className="input-box" type="text" label="Tài khoản" placeholder="Tài khoản" />
          </Form.Item>
          <Form.Item name="fullname" rules={fullname}>
            <Input className="input-box" type="text" label="Họ tên" placeholder="Họ tên" />
          </Form.Item>
          <Form.Item name="email" rules={email}>
            <Input className="input-box" type="text" label="Email" placeholder="Email" />
          </Form.Item>

          <Form.Item name="password" rules={password}>
            <Input.Password className="input-box" label="Mật khẩu" placeholder="Mật khẩu" />
          </Form.Item>

          <Flex align="center" justify="space-between" className="sign-up-link">
            <Flex>
              <Text>
                Đã có tài khoản? <Link to={AUTH_PATH.LOGIN}>Đăng nhập</Link>
              </Text>
            </Flex>
          </Flex>

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
                Đăng ký
              </Button>
            </Flex>
          </Form.Item>
        </Form>
      </ConfigProvider>
    </div>
  );
};
export default SignUpView;
