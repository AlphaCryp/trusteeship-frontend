import React from "react";
import {ClearFloat, Title} from "./layouts";
import {Form, Input, Checkbox, Button, Select, Upload} from "antd";
import { UploadOutlined } from '@ant-design/icons';
const plainOptions = ["工商托管", "建设托管", "农业托管", "招商托管"];
const { Option } = Select;

function TrusteeshipForm(props) {
  function onChange(checkedValues) {
    console.log("checked = ", checkedValues);
  }

  return (
    <div>
      <Title>资产托管</Title>
      <Form layout="vertical" colon={false}>
        <Form.Item
          label="请选择您的私钥"
          name="privateKey"
          rules={[
            { required: true, message: "Please upload your private key!" }
          ]}
        >
          <Upload>
            <Button>
              <UploadOutlined /> 请上传私钥
            </Button>
          </Upload>
        </Form.Item>
        <Form.Item
          label="请选择资产托管方"
          name="trustee"
          rules={[{ required: true, message: "Please choose a trustee!" }]}
        >
          <Checkbox.Group
            options={plainOptions}
            defaultValue={["Apple"]}
            onChange={onChange}
          />
        </Form.Item>
        <Button type="primary" style={{margin: "40px 0", width: '176px', float: 'right'}}>添加托管方</Button>
        <ClearFloat />
        <Form.Item
          label="请选择恢复签名时需要的托管方的数量"
          name="number"
          rules={[{ required: true, message: "Please choose a trustee!" }]}
        >
          <Select
            onChange={onChange}
            placeholder="请选择恢复签名时需要的托管方的数量"
          >
            <Option value="1">1</Option>
            <Option value="2">2</Option>
            <Option value="3">3</Option>
            <Option value="4">4</Option>
          </Select>
        </Form.Item>
        <Button type="primary" style={{marginTop: "40px", width: '176px',float: 'right'}}>托  管</Button>
      </Form>
    </div>
  );
}

export default TrusteeshipForm;
