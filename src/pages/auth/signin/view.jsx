import React from "react";
import { Button, Input, Form, Flex, Typography, ConfigProvider } from "antd";

import { username, password } from "./validate";
import "./styles/styles.css";

const SignInView = (props) => {
  const { onFinish, onFinishFailed } = props;
  const { Text, Link } = Typography;
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
            Đăng nhập
          </Typography.Title>
          <Form.Item name="username" rules={username}>
            <Input className="input-box" type="text" label="Tài khoản" placeholder="Tài khoản" />
          </Form.Item>

          <Form.Item name="password" rules={password}>
            <Input.Password className="input-box" label="Mật khẩu" placeholder="Mật khẩu" />
          </Form.Item>

          <Flex align="center" justify="space-between" className="sign-up-link">
            <Flex>
              <Text>
                Chưa có tài khoản? <Link href="#">Tạo ngay</Link>
              </Text>
            </Flex>
            <Flex>
              <Link href="#">Quên mật khẩu</Link>
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
                Đăng nhập
              </Button>
            </Flex>
          </Form.Item>
        </Form>
      </ConfigProvider>
    </div>
  );
};
export default SignInView;
