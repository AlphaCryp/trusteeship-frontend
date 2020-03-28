import React from "react";
import { Title } from "./layouts";
import { useHistory } from "react-router-dom";
import { Button, Checkbox, Form, Input, message } from "antd";
import { serializeRawTransaction } from "../../node_modules/@nervosnetwork/ckb-sdk-utils/lib/serialization/transaction";
import CKB from "@nervosnetwork/ckb-sdk-core";
const plainOptions = [
  { label: "工商托管", value: "1" },
  { label: "建设托管", value: 2 },
  { label: "农业托管", value: 3 },
  { label: "招商托管", value: 4 }
];
const nodeUrl = "http://18.162.36.206:8114";

function UsageForm(props) {
  const history = useHistory();
  function onChange(checkedValues) {
    console.log("checked = ", checkedValues);
  }

  function readPk() {
    return localStorage.getItem("pk");
  }
  async function handleSubmit(values) {
    const ckb = new CKB(nodeUrl);
    const pk = readPk();
    await ckb.loadSecp256k1Dep();
    const fromAddress = ckb.utils.pubkeyToAddress(`0x${pk}`, {
      prefix: "ckt"
    });
    const generatedPrivateKey =
      "63d86723e08f0f813a36ce6aa123bb2289d90680ae1e99d4de8cdb334553f24d";
    const toAddress = ckb.utils.privateKeyToAddress(
      "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
      {
        prefix: "ckt"
      }
    );
    const lockScript = {
      codeHash:
        "0x9bd7e06f3ecf4be0f2fcd2188b23f1b9fcc88e5d4b65a8637b17723bbda3cce8",
      hashType: "type",
      args: "0x470dcdc5e44064909650113a274b3b36aecb6dc7"
    };
    const lockHash = ckb.utils.scriptToHash(lockScript);
    const unspentCells = await ckb.loadCells({
      lockHash
    });
    const rawTransaction = ckb.generateRawTransaction({
      fromAddress,
      toAddress,
      // eslint-disable-next-line no-undef
      capacity: BigInt(600000000000),
      // eslint-disable-next-line no-undef
      fee: BigInt(100000),
      safeMode: true,
      cells: unspentCells,
      deps: ckb.config.secp256k1Dep
    });

    const msg = ckb.utils
      .bytesToHex(serializeRawTransaction(rawTransaction))
      .replace("0x", "");
    const res = await fetch("/sign", {
      method: "POST",
      body: JSON.stringify({
        msg,
        ids: [1, 2]
      })
    }).then(res => res.json());
    message.success('签名成功');
    await fetch("/verify", {
      method: "POST",
      body: JSON.stringify({
        msg,
        sig: res.sig
      })
    });
    message.success('验证成功');

    history.push(`/recover/${res.sig}`);
  }
  return (
    <div>
      <Form layout="vertical" colon={false} onFinish={handleSubmit}>
        <Title>资产使用</Title>
        <Form.Item label="请输入收款方地址" name="address">
          <Input placeholder="请输入收款方地址" />
        </Form.Item>
        <Form.Item label="请输入转账金额" name="amount">
          <Input placeholder="请输入转账金额" />
        </Form.Item>
        <Form.Item label="请选择资产托管方" name="trustee">
          <Checkbox.Group options={plainOptions} onChange={onChange} />
        </Form.Item>
        <Button
          htmlType="submit"
          type="primary"
          style={{ width: "100%", marginTop: 60 }}
        >
          申请签名
        </Button>
      </Form>
    </div>
  );
}

export default UsageForm;
