import React, { useEffect, useState } from "react";
import { ClearFloat, Title } from "./layouts";
import { Button, Checkbox, Form, Select, message } from "antd";
import {useHistory} from "react-router-dom";

const plainOptions = [
  { label: "工商托管", value: 1 },
  { label: "建设托管", value: 2 },
  { label: "农业托管", value: 3 },
  { label: "招商托管", value: 4 }
];

const { Option } = Select;

function TrusteeshipForm(props) {
  const [g, setG] = useState();
  const [ids, setIds] = useState();
  const history = useHistory();
  useEffect(() => {
    const res = localStorage.getItem("g");
    setG(res);
  }, []);

  function onChange(checkedValues) {
    setIds(checkedValues);
  }

  function submit() {
    if (g && ids) {
      const data = {
        g,
        ids
      };
      fetch("derive", {
        method: "POST",
        body: JSON.stringify(data)
      }).then(res => {
        message.success("托管完成");
        setTimeout(() => {history.push('/')}, 1000);
      });
    }
  }
  return (
    <div>
      <Title>资产托管</Title>
      <Form layout="vertical" colon={false} onFinish={submit}>
        <Form.Item
          label="请选择资产托管方"
          name="trustee"
          rules={[{ required: true, message: "Please choose a trustee!" }]}
        >
          <Checkbox.Group options={plainOptions} onChange={onChange} />
        </Form.Item>
        <Button
          type="primary"
          style={{ margin: "40px 0", width: "176px", float: "right" }}
        >
          添加托管方
        </Button>
        <ClearFloat />
        <Form.Item
          label="请选择恢复签名时需要的托管方的数量"
          name="number"
          rules={[{ required: true, message: "Please choose a trustee!" }]}
        >
          <Select placeholder="请选择恢复签名时需要的托管方的数量">
            <Option value="1">1</Option>
            <Option value="2">2</Option>
            <Option value="3">3</Option>
            <Option value="4">4</Option>
          </Select>
        </Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          style={{ marginTop: "40px", width: "176px", float: "right" }}
        >
          托 管
        </Button>
      </Form>
    </div>
  );
}

export default TrusteeshipForm;
