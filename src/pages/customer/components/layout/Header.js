import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { Button, Flex, ConfigProvider, Tooltip, Menu } from "antd";

import {
  LogoutOutlined,
  UserOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";

import { AUTH_PATH } from "../../../../constants/path";
import logo from "../../../../assets/logo.png";

const Header = (props) => {
  const [current, setCurrent] = useState("home");
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  return (
    <ConfigProvider
      theme={{
        components: {
          Button: {
            /* here is your component tokens */
          },
          Menu: {
            horizontalLineHeight: '70px'
          },
        },
        token: {
          colorPrimary: "#00b96b",
        },
        
      }}>
      <Flex gap="middle" vertical>
        <Flex gap="small" justify="space-between">
          <Flex gap="small" justify="flex-start" align="center">
            <img src={logo} alt="logo" height={70} />
          </Flex>
          <Flex gap="small" justify="flex-center" align="center">
            <Flex gap="large" justify="space-between" align="center">
              <Menu
                onClick={onClick}
                selectedKeys={[current]}
                dashed={false}
                mode="horizontal">
                <Menu.Item key={"home"} style={{ fontSize: "20px" }}>
                  Trang chủ
                </Menu.Item>
                <Menu.Item key={"product"} style={{ fontSize: "20px" }}>
                  sản phẩm
                </Menu.Item>
                <Menu.Item key={"service"} style={{ fontSize: "20px" }}>
                  Dịch vụ
                </Menu.Item>
                <Menu.Item key={"Blog"} style={{ fontSize: "20px" }}>
                  Blog
                </Menu.Item>
              </Menu>
            </Flex>
          </Flex>
          <Flex gap="small" justify="flex-end" align="center">
            <Tooltip placement="top" title="giỏ hàng">
              <Button icon={<ShoppingCartOutlined />} />
            </Tooltip>
            <Tooltip placement="top" title="Thông tin cá nhân">
              <Button icon={<UserOutlined />} />
            </Tooltip>
            <Button href={AUTH_PATH.LOGIN} danger icon={<LogoutOutlined />}>
              Đăng xuất
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </ConfigProvider>
  );
};

export default Header;
