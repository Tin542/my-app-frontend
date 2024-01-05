import React, { useState } from "react";

import { Layout, Menu, Button, theme } from "antd";

import "../styles/styles.css";
import SideNav from "./Sidenav";

import logo from "../../../../assets/pntlogo.png";

const Main = ({ children }) => {
  const { Header, Sider, Content } = Layout;
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout hasSider>
      <Sider
        style={{
          overflow: "auto",
          height: "100vh",
          left: 0,
          top: 0,
          bottom: 0,
        }}
        trigger={null}>
        <SideNav />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}></Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}>
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};
export default Main;
