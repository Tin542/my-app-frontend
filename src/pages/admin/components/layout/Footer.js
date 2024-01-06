import { Layout, Row, Col } from "antd";
import { HeartFilled } from "@ant-design/icons";

function Footer() {
  const { Footer: AntFooter } = Layout;

  return (
    <AntFooter>
      <Row className="just">
        <Col xs={24} md={12} lg={12}>
          <div className="copyright">
            © 2024, made with&nbsp; 
            {<HeartFilled />} by &nbsp; 
            <a href="#pablo" className="font-weight-bold" target="_blank">
              Tin &nbsp; 
            </a>
          </div>
        </Col>
      
      </Row>
    </AntFooter>
  );
}

export default Footer;
