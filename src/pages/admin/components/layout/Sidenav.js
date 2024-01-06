// import { useState } from "react";
import { Menu, Button } from "antd";
import { NavLink, useLocation } from "react-router-dom";
import {
  AreaChartOutlined,
  UserOutlined,
  ContainerOutlined,
} from "@ant-design/icons";
import logo from "../../../../assets/pntlogo.png";

function Sidenav({ color }) {
  const { pathname } = useLocation();
  const page = pathname.replace("/", "");

  return (
    <>
      <div className="brand">
        <img src={logo} alt="" />
        {/* <span>PHÒNG CÔNG NGHỆ THÔNG TIN</span> */}
      </div>
      <hr />
      <Menu theme="light" mode="inline" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1">
          <NavLink className="nav-link" to="#">
            <AreaChartOutlined />
            <span>Dasboard</span>
          </NavLink>
        </Menu.Item>
        <Menu.Item key="2">
          <NavLink className="nav-link" to="#">
            <UserOutlined />
            <span>User</span>
          </NavLink>
        </Menu.Item>
        <Menu.Item key="3">
          <NavLink className="nav-link" to="#">
            <ContainerOutlined />
            <span>Task</span>
          </NavLink>
        </Menu.Item>
      </Menu>
    </>
  );
}

export default Sidenav;
