import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button, Flex, ConfigProvider, Tooltip } from "antd";
import { useSelector } from "react-redux";
import {
  LogoutOutlined,
  UserOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { useDispatch } from "react-redux";

import { AUTH_PATH, CUSTOMER_PATH } from "../../../../constants/path";
import { handleLogout } from "../../../../redux-flow/action";
import logo from "../../../../assets/logo.png";
import { userSelector } from "../../../../redux-flow/selector";

const Header = (props) => {
  const [current, setCurrent] = useState("Home");
  const user = useSelector(userSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log(user);

  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  const logOut = () => {
    dispatch(handleLogout({}));
    navigate(AUTH_PATH.LOGIN);
  };

  return (
    <ConfigProvider
      theme={{
        components: {
          Button: {
            contentFontSize: "15px",
            defaultActiveColor: '#fff',
            defaultActiveBg: '#224e33',
            fontWeight: 'bold',
          }
        },
        token: {
          colorPrimary: "#224e33",
        },
      }}>
      <Flex gap="middle" vertical>
        <Flex gap="small" justify="space-between">
          <Flex gap="small" justify="flex-start" align="center">
            <img src={logo} alt="logo" height={70} />
          </Flex>
          <Flex gap="small" justify="flex-center" align="center">
            <Flex gap="large" justify="space-between" align="center">
              <Button target style={{color: 'black'}} type="link"><Link to={CUSTOMER_PATH.INDEX}>Trang chủ</Link></Button>
              <Button style={{color: 'black'}} type="link"><Link to={CUSTOMER_PATH.PRODUCT}>Sản phẩm</Link></Button>
              <Button style={{color: 'black'}} type="link"> <Link to={CUSTOMER_PATH.SERVICES}>Dịch vụ</Link></Button>
              <Button style={{color: 'black'}} type="link"> <Link to={CUSTOMER_PATH.BLOG}>Blog</Link></Button>
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
                <Button onClick={logOut} danger icon={<LogoutOutlined />}>
                  Đăng xuất
                </Button>
              </>
            ) : (
              <Button type="primary" href={AUTH_PATH.LOGIN} icon={<LogoutOutlined />}>
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
