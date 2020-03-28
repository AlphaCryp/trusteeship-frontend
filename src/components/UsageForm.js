import React from 'react';
import {Title} from "./layouts";
import {Button, Checkbox, Form, Input} from "antd";
const plainOptions = ["工商托管", "建设托管", "农业托管", "招商托管"];

function UsageForm(props) {
  function onChange(checkedValues) {
    console.log("checked = ", checkedValues);
  }
  return (
      <div>
        <Form layout="vertical" colon={false}>
          <Title>资产使用</Title>
          <Form.Item
              label="请输入收款方地址"
              name="address"
          >
            <Input placeholder="请输入收款方地址" />
          </Form.Item>
          <Form.Item
              label="请输入转账金额"
              name="amount"
          >
            <Input placeholder="请输入转账金额" />
          </Form.Item>
          <Form.Item
              label="请选择资产托管方"
              name="trustee"
          >
            <Checkbox.Group
                options={plainOptions}
                onChange={onChange}
            />
          </Form.Item>
          <Button htmlType="submit" type="primary" style={{width: '100%', marginTop: 60}}>申请签名</Button>
        </Form>
      </div>
  );
}

export default UsageForm;
