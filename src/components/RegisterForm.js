import React from "react";
import { Title } from "./layouts";
import { Button, Form, Input } from "antd";

export default () => {
  return (
    <div style={{ width: 350 }}>
      <Form>
        <Title>账号注册</Title>
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input placeholder="请输入用户名" />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input placeholder="请输入邮箱" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input placeholder="请输如密码" />
        </Form.Item>
        <Form.Item
          name="rePassword"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input placeholder="请确认密码" />
        </Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          style={{ background: "#2D2D2D", width: "100%" }}
        >
          注册
        </Button>
      </Form>
    </div>
  );
};
