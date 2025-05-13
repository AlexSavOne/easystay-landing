//src\sections\HowItWorks.tsx
import React from "react";
import { Row, Col, Card, Typography } from "antd";
import {
  SearchOutlined,
  CalendarOutlined,
  SmileOutlined,
} from "@ant-design/icons";

const { Title, Text } = Typography;

const steps = [
  {
    icon: (
      <SearchOutlined
        style={{ fontSize: "2rem", color: "var(--primary-color)" }}
      />
    ),
    title: "1. Поиск",
    desc: "Введите город и даты — мы найдём лучшие варианты.",
  },
  {
    icon: (
      <CalendarOutlined
        style={{ fontSize: "2rem", color: "var(--primary-color)" }}
      />
    ),
    title: "2. Бронирование",
    desc: "Выберите жильё и забронируйте за пару кликов.",
  },
  {
    icon: (
      <SmileOutlined
        style={{ fontSize: "2rem", color: "var(--primary-color)" }}
      />
    ),
    title: "3. Проживание",
    desc: "Заезжайте и наслаждайтесь отдыхом без забот.",
  },
];

const HowItWorks: React.FC = () => {
  return (
    <section className="how-it-works section-overlay">
      <div className="container">
        <Title level={2} className="section-heading">
          Как это работает
        </Title>

        <Row gutter={[24, 24]} justify="center">
          {steps.map((step, idx) => (
            <Col key={idx} xs={24} sm={12} md={8}>
              <Card
                className="card"
                hoverable
                bodyStyle={{ textAlign: "center", padding: "2rem" }}
              >
                <div style={{ marginBottom: "1rem" }}>{step.icon}</div>
                <Title level={4}>{step.title}</Title>
                <Text>{step.desc}</Text>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default HowItWorks;
