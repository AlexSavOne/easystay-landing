// src/sections/Destinations.tsx
import React from "react";
import { Row, Col, Card, Typography } from "antd";
const { Title, Text } = Typography;

const destinations = [
  {
    name: "Париж",
    image: "/images/destinations/paris.jpg",
    desc: "Город любви и света",
  },
  {
    name: "Токио",
    image: "/images/destinations/tokyo.jpg",
    desc: "Современная и традиционная Япония",
  },
  {
    name: "Барселона",
    image: "/images/destinations/barcelona.jpg",
    desc: "Средиземноморский шарм и архитектура Гауди",
  },
];

const Destinations: React.FC = () => (
  <section className="destinations section-overlay">
    <div className="container">
      <Title level={2} className="section-heading">
        Популярные направления
      </Title>

      <Row gutter={[24, 24]} justify="center">
        {destinations.map((d) => (
          <Col key={d.name} xs={24} sm={12} md={8}>
            <Card
              className="card"
              hoverable
              cover={
                <img
                  alt={d.name}
                  src={d.image}
                  style={{ height: 200, objectFit: "cover" }}
                />
              }
              bodyStyle={{ textAlign: "center", padding: "1.5rem" }}
            >
              <Title level={4}>{d.name}</Title>
              <Text type="secondary">{d.desc}</Text>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  </section>
);

export default Destinations;
