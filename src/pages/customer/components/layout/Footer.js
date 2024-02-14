import { Layout, Row, Col, ConfigProvider } from "antd";
import { HeartFilled } from "@ant-design/icons";

function Footer() {
  const { Footer: AntFooter } = Layout;

  return (
    <ConfigProvider
      theme={{
        components: {
          Layout: {
            footerBg: "#224e33",
            footerPadding: "20px",
          },
        },
      }}>
      <div class="footer-container">
        <img class="logo" src="image/footer-logo.png" alt="logo" />
        <div class="container-fluid">
          <div class="row">
            <div class="col-sm-3">
              <div class="footer-category">
                <p>Chăm sóc khách hàng</p>
                <p class="footer-info">(+84) 123 456 789</p>
              </div>
            </div>
            <div class="col-sm-3">
              <div class="footer-category">
                <p>Liên hệ với chúng tôi</p>
                <p class="footer-info">Mail: support@gmail.com</p>
                <p>Hoặc</p>
                <p class="footer-info">
                  <a href="#">
                    <i class="fab fa-instagram"></i>
                  </a>
                  <a href="#">
                    <i class="fab fa-facebook-square"></i>
                  </a>
                  <a href="#">
                    <i class="fab fa-twitter-square"></i>
                  </a>
                  <a href="#">
                    <i class="fab fa-youtube"></i>
                  </a>
                </p>
              </div>
            </div>
            <div class="col-sm-3">
              <div class="footer-category">
                <p>Dịch vụ</p>
                <ul class="footer-info">
                  <li>
                    <a href="#">Chính sách và điều khoản</a>
                  </li>
                  <li>
                    <a href="#">Hướng dẫn thanh toán</a>
                  </li>
                  <li>
                    <a href="#">Đổi trả và hoàn tiền</a>
                  </li>
                  <li>
                    <a href="#">FAQ</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-sm-3">
              <div class="footer-category">
                <p>Ảnh khác</p>
                <div class="footer-items">
                  <img src="image/product3.png" />
                  <img src="image/product5.png" />
                  <img src="image/product6.png" />
                  <img src="image/product7.png" />
                  <img src="image/product4.png" />
                  <img src="image/product8.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ConfigProvider>
  );
}

export default Footer;
