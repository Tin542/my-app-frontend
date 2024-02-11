import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { Button, Flex, ConfigProvider, Tooltip } from "antd";
import {
  LogoutOutlined,
  UserOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons";

import {AUTH_PATH} from "../../../../constants/path";

const Header = (props) => {
  const { collapsed, setCollapsed } = props;
  return (
    <ConfigProvider>
      <Flex gap="middle" vertical>
        <Flex gap="small" justify="space-between">
          <Flex gap="small" justify="flex-start" align="center">
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
            />
          </Flex>

          <Flex gap="small" justify="flex-end" align="center">
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
