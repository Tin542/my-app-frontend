import React, { useState } from "react";

import { Layout, Menu, Button, theme } from "antd";

import "../styles/style.css";
import Header from "./Header";
import Footer from "./Footer";

const UserMain = ({ children }) => {
  const { Header: antHeader, Sider, Content } = Layout;
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout hasSider>
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
export default UserMain;
