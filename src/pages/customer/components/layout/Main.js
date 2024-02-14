import React, { useState } from "react";

import { Layout, Menu, Button, theme } from "antd";

import Header from "./Header";
import Footer from "./Footer";

import logo from "../../../../assets/logo.png";

const Main = ({ children }) => {
  const { Header: antHeader, Content } = Layout;
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Layout>
        <antHeader className="antd-header">
          <Header />
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
