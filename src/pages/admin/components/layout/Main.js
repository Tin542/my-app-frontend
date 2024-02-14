import React, { useState } from "react";

import { Layout, Menu, Button, theme } from "antd";

import "../styles/styles.css";
import SideNav from "./Sidenav";
import Header from "./Header";
import Footer from "./Footer";

import logo from "../../../../assets/logo.png";

const Main = ({ children }) => {
  const { Header: antHeader, Sider, Content } = Layout;
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout hasSider>
      <Sider
      style={{
        background: colorBgContainer,
      }}
        collapsible
        collapsed={collapsed}
        breakpoint="lg"
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
        trigger={null}
        width={250}>
        <SideNav />
      </Sider>
      <Layout>
        <antHeader className="antd-header">
          <Header collapsed={collapsed} setCollapsed={setCollapsed} />
        </antHeader>
        <Content className="antd-content">
          {children}
        </Content>
        <Footer />
      </Layout>
    </Layout>
  );
};
export default Main;
