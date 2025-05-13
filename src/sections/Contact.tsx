// src/sections/Contact.tsx
import React from "react";
import { Form, Input, DatePicker, InputNumber, Button, Typography } from "antd";

const { Title } = Typography;
const { RangePicker } = DatePicker;

// Выводим тип для value прямо из пропсов RangePicker
type RangePickerValue = React.ComponentProps<typeof RangePicker>["value"];

interface BookingFormValues {
  name: string;
  email: string;
  dates: RangePickerValue;
  guests: number;
}

const Contact: React.FC = () => {
  const [form] = Form.useForm<BookingFormValues>();

  const onFinish = (values: BookingFormValues) => {
    console.log("Booking request:", values);
    form.resetFields();
  };

  return (
    <section className="contact section-overlay">
      <div className="container">
        <Title level={2} className="section-heading">
          Забронировать проживание
        </Title>

        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          initialValues={{ guests: 1 }}
          style={{ maxWidth: 600, margin: "0 auto" }}
        >
          <Form.Item
            name="name"
            label="Имя"
            rules={[{ required: true, message: "Пожалуйста, укажите имя" }]}
          >
            <Input placeholder="Ваше имя" size="large" />
          </Form.Item>

          <Form.Item
            name="email"
            label="Email"
            rules={[
              { required: true, message: "Пожалуйста, укажите email" },
              { type: "email", message: "Введите корректный email" },
            ]}
          >
            <Input placeholder="you@example.com" size="large" />
          </Form.Item>

          <Form.Item
            name="dates"
            label="Даты проживания"
            rules={[{ required: true, message: "Выберите даты" }]}
          >
            <RangePicker size="large" style={{ width: "100%" }} />
          </Form.Item>

          <Form.Item
            name="guests"
            label="Гостей"
            rules={[{ required: true, message: "Укажите количество гостей" }]}
          >
            <InputNumber
              min={1}
              max={20}
              style={{ width: "100%" }}
              size="large"
            />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" size="large" block>
              Отправить запрос
            </Button>
          </Form.Item>
        </Form>
      </div>
    </section>
  );
};

export default Contact;
