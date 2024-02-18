import { Row, Col, ConfigProvider } from "antd";
import {
  FacebookOutlined,
  InstagramOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import "../styles/footer.css";

import footerLogo from "../../../../assets/footer-logo.png";
import product3 from "../../../../assets/product3.png";
import product4 from "../../../../assets/product4.png";
import product5 from "../../../../assets/product5.png";
import product6 from "../../../../assets/product6.png";
import product7 from "../../../../assets/product7.png";
import product8 from "../../../../assets/product8.png";
function Footer() {
  return (
    <ConfigProvider>
      <div class="footer-container">
        <img class="logo" src={footerLogo} alt="logo" />
        <Row align="top" gutter={[32, 24]}>
          <Col span={6}>
            <div class="footer-category">
              <p>Chăm sóc khách hàng</p>
              <p class="footer-info">(+84) 123 456 789</p>
            </div>
          </Col>
          <Col span={6}>
            <div class="footer-category">
              <p>Liên hệ với chúng tôi</p>
              <p class="footer-info">Mail: support@gmail.com</p>
              <p>Hoặc</p>
              <Row align="middle" gutter={[32, 24]}>
                <Col>
                  <a href="#">
                    <FacebookOutlined className="footer-contact-facebook"/>
                  </a>
                </Col>
                <Col>
                  <a href="#">
                    <InstagramOutlined className="footer-contact-instagram"/>
                  </a>
                </Col>
                <Col>
                  <a href="#">
                    <YoutubeOutlined className="footer-contact-youtube" style={{ fontSize: 37 }} />
                  </a>
                </Col>
              </Row>
            </div>
          </Col>
          <Col span={6}>
            <div class="footer-category">
              <p>Dịch vụ</p>
              <p>
                <a className="footer-services" href="#">Chính sách và điều khoản</a>
              </p>
              <p>
                <a className="footer-services" href="#">Chính sách và điều khoản</a>
              </p>
              <p>
                <a className="footer-services" href="#">Hướng dẫn thanh toán</a>
              </p>
              <p>
                <a className="footer-services" href="#">Đổi trả và hoàn tiền</a>
              </p>
              <p>
                <a className="footer-services" href="#">FAQ</a>
              </p>
            </div>
          </Col>
          <Col span={6}>
            <div class="footer-category">
              <p>Ảnh khác</p>
              <Row gutter={[16, 16]}>
                <Col span={8}>
                  <img src={product3} className="footer-more-product"/>
                </Col>
                <Col span={8}>
                  <img src={product4} className="footer-more-product"/>
                </Col>
                <Col span={8}>
                  <img src={product5} className="footer-more-product"/>
                </Col>
                <Col span={8}>
                  <img src={product6} className="footer-more-product"/>
                </Col>
                <Col span={8}>
                  <img src={product7} className="footer-more-product"/>
                </Col>
                <Col span={8}>
                  <img src={product8} className="footer-more-product"/>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    </ConfigProvider>
  );
}

export default Footer;
