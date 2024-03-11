import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { Button, Flex, ConfigProvider, Tooltip, Menu } from "antd";
import { useSelector } from "react-redux";

import {
  LogoutOutlined,
  UserOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";

import { AUTH_PATH, CUSTOMER_PATH } from "../../../../constants/path";
import logo from "../../../../assets/logo.png";
import { userSelector } from "../../../../redux-flow/selector";

const Header = (props) => {
  const [current, setCurrent] = useState("home");
  const user = useSelector(userSelector);
  console.log(user);
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  return (
    <ConfigProvider
      theme={{
        components: {
          Menu: {
            horizontalLineHeight: "70px",
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
                  <Link to={CUSTOMER_PATH.INDEX}>Trang chủ</Link>
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
            {user ? (
              <>
                <Tooltip placement="top" title="giỏ hàng">
                  <Button icon={<ShoppingCartOutlined />} />
                </Tooltip>
                <Tooltip placement="top" title="Thông tin cá nhân">
                  <Button icon={<UserOutlined />} />
                </Tooltip>
                <Button href={AUTH_PATH.LOGIN} danger icon={<LogoutOutlined />}>
                  Đăng xuất
                </Button>
              </>
            ) : (
              <Button href={AUTH_PATH.LOGIN} icon={<LogoutOutlined />}>
                Đăng nhập
              </Button>
            )}
          </Flex>
        </Flex>
      </Flex>
    </ConfigProvider>
  );
};

export default Header;
