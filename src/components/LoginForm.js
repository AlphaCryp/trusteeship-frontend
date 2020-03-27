import React from "react";
import { Title } from "./layouts";
import {Button, Form, Input} from "antd";

export default () => {
  return (
    <div style={{ width: 350 }}>
      <Form>
        <Title>账号登录</Title>
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
        <Button type="primary" htmlType="submit" style={{background: '#2D2D2D', width: '100%'}}>
          登录
        </Button>
      </Form>
    </div>
  );
};
