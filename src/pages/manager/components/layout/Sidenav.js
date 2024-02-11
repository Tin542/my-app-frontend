// import { useState } from "react";
import { Menu, Button } from "antd";
import { NavLink, useLocation } from "react-router-dom";
import {
  AreaChartOutlined,
  UserOutlined,
  ContainerOutlined,
} from "@ant-design/icons";
import logo from "../../../../assets/pntlogo.png";
import { AUTH_PATH, MANAGER_PATH } from "../../../../constants/path";;

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
        
        <Menu.Item key="user">
          <NavLink className="nav-link" to={MANAGER_PATH.USER}>
            <UserOutlined />
            <span>Tài khoản</span>
          </NavLink>
        </Menu.Item>
        <Menu.Item key="task">
          <NavLink className="nav-link" to={MANAGER_PATH.TASK}>
            <ContainerOutlined />
            <span>Công việc</span>
          </NavLink>
        </Menu.Item>
      </Menu>
    </>
  );
}

export default Sidenav;
