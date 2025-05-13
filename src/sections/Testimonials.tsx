// src/sections/Testimonials.tsx
import React from "react";
import { Row, Col, Card, Rate, Typography } from "antd";
const { Title, Text } = Typography;

const testimonials = [
  {
    name: "Иван Петров",
    city: "Краснодар",
    comment: "Отличный сервис! Нашёл квартиру за пару минут, очень удобно.",
    rating: 5,
  },
  {
    name: "Ольга Сидорова",
    city: "Спб",
    comment: "Бронирование прошло без проблем, дом отличный.",
    rating: 4,
  },
  {
    name: "Михаил Иванов",
    city: "Екб",
    comment: "Прекрасный выбор вариантов, всем рекомендую.",
    rating: 5,
  },
];

const Testimonials: React.FC = () => (
  <section className="testimonials section-overlay">
    <div className="container">
      <Title level={2} className="section-heading">
        Отзывы гостей
      </Title>

      <Row gutter={[24, 24]} justify="center">
        {testimonials.map((t, idx) => (
          <Col key={idx} xs={24} sm={12} md={8}>
            <Card
              hoverable
              className="card"
              bodyStyle={{ padding: "2rem", textAlign: "center" }}
            >
              <Title level={4}>{t.name}</Title>
              <Text
                type="secondary"
                style={{ display: "block", marginBottom: "1rem" }}
              >
                {t.city}
              </Text>
              <Text>"{t.comment}"</Text>
              <div style={{ marginTop: "1rem" }}>
                <Rate disabled defaultValue={t.rating} />
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  </section>
);

export default Testimonials;
