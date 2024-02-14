// import { useState } from "react";
import { Menu, Button } from "antd";
import { NavLink, useLocation } from "react-router-dom";
import {
  AreaChartOutlined,
  UserOutlined,
  ContainerOutlined,
} from "@ant-design/icons";
import logo from "../../../../assets/logo.png";
import { AUTH_PATH, ADMIN_PATH } from "../../../../constants/path";;

function Sidenav({ color }) {
  const { pathname } = useLocation();
  const page = pathname.replace("/admin/", "");

  return (
    <>
      <div className="brand">
        <img src={logo} alt="" />
      </div>
      <hr />
      <Menu theme="light" mode="inline" defaultSelectedKeys={[`${page}`]}>
        <Menu.Item key="dashboard">
          <NavLink className="nav-link" to={ADMIN_PATH.DASHBOARD}>
            <AreaChartOutlined />
            <span>Thống kê</span>
          </NavLink>
        </Menu.Item>
        <Menu.Item key="user">
          <NavLink className="nav-link" to={ADMIN_PATH.USER}>
            <UserOutlined />
            <span>Tài khoản</span>
          </NavLink>
        </Menu.Item>
        <Menu.Item key="product">
          <NavLink className="nav-link" to={ADMIN_PATH.PRODUCT}>
            <ContainerOutlined />
            <span>Sản phẩm</span>
          </NavLink>
        </Menu.Item>
      </Menu>
    </>
  );
}

export default Sidenav;
