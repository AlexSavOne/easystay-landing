// src/sections/Footer.tsx
import React from "react";
import { Layout, Row, Col, Typography, Space } from "antd";
import {
  InstagramOutlined,
  FacebookOutlined,
  TwitterOutlined,
  MailOutlined,
} from "@ant-design/icons";

const { Footer: AntFooter } = Layout;
const { Text, Link } = Typography;

const Footer: React.FC = () => (
  <AntFooter style={{ background: "#111122", padding: "2rem 0" }}>
    <div className="container">
      <Row gutter={[16, 16]} justify="space-between" align="middle">
        {/* Левый блок */}
        <Col xs={24} sm={12}>
          <Text style={{ color: "#ffffff", display: "block" }}>
            © {new Date().getFullYear()} EasyStay. Все права защищены.
          </Text>
          <Text style={{ color: "#ffffff" }}>
            Created by AlexSavOne
          </Text>
        </Col>

        {/* Правый блок */}
        <Col xs={24} sm={12} style={{ textAlign: "right" }}>
          <Space size="middle">
            <Link href="/privacy" style={{ color: "#ffffff" }}>
              Политика конфиденциальности
            </Link>
            <Link href="/terms" style={{ color: "#ffffff" }}>
              Условия использования
            </Link>
            <InstagramOutlined
              style={{ fontSize: "1.25rem", color: "#ffffff" }}
            />
            <FacebookOutlined
              style={{ fontSize: "1.25rem", color: "#ffffff" }}
            />
            <TwitterOutlined
              style={{ fontSize: "1.25rem", color: "#ffffff" }}
            />
            <MailOutlined
              style={{ fontSize: "1.25rem", color: "#ffffff" }}
            />
          </Space>
        </Col>
      </Row>
    </div>
  </AntFooter>
);

export default Footer;
