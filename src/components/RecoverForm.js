import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { HorizonLayout, Title } from "./layouts";

function RecoverForm(props) {
  const [form] = Form.useForm();
  function onPaste() {
    navigator.clipboard.readText().then(clipText =>
      form.setFieldsValue({
        tx: clipText
      })
    );
  }

  return (
    <Form layout="vertical" colon={false} form={form}>
      <Title>资产使用</Title>
      <Form.Item label="您的交易签名是" name="tx">
        <Input.TextArea
          placeholder="您的交易签名"
          disabled
          autoSize={{ minRows: 10, maxRows: 20 }}
        />
      </Form.Item>
      <HorizonLayout justfyContent="space-between">
        <Button
          type="primary"
          style={{ width: "316px", marginTop: 60, background: "#2d2d2d" }}
          onClick={onPaste}
        >
          复制签名
        </Button>

        <Button
          htmlType="submit"
          type="primary"
          style={{ width: "316px", marginTop: 60 }}
        >
          交易上链
        </Button>
      </HorizonLayout>
    </Form>
  );
}

export default RecoverForm;
