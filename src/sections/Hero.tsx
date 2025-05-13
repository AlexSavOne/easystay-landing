// src/sections/Hero.tsx
import React from "react";
import { Button, DatePicker, Input, Row, Col } from "antd";
import "antd/dist/reset.css";

const { RangePicker } = DatePicker;

const Hero: React.FC = () => {
  return (
    <section className="hero section-overlay">
      <div className="container hero-content">
        <Row gutter={[24, 24]} align="middle">
          {/* Текстовая часть */}
          <Col xs={24} lg={12}>
            <h1 className="hero-title">Найдите жильё мечты</h1>
            <p className="hero-subtitle">Поиск и бронирование в пару кликов</p>

            <Row gutter={[16, 16]}>
              <Col xs={24} sm={12}>
                <Input size="large" placeholder="Город или адрес" />
              </Col>
              <Col xs={24} sm={12}>
                <RangePicker size="large" style={{ width: "100%" }} />
              </Col>
              <Col xs={24}>
                <Button type="primary" size="large" className="hero-button">
                  Поиск
                </Button>
              </Col>
            </Row>
          </Col>

          {/* Изображение */}
          <Col xs={0} lg={12}>
            <div className="hero-image">
              <img
                src="src/images/hero-placeholder.jpg"
                alt="Booking"
                style={{ width: "100%", display: "block" }}
              />
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Hero;
