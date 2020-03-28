import React from "react";
import {
  Bg,
  BigText,
  BlockB,
  BlockO,
  Head,
  HorizonLayout,
  MT120,
  RBtn,
  Slogon
} from "../components/layouts";
import { Button } from "antd";
import { Link } from "react-router-dom";

function Index(props) {
  return (
    <Bg>
      <Head>
        <Link to="/login" style={{ marginRight: 30 }}>
          登录
        </Link>
        |
        <RBtn>
          <Link to="/register">注册</Link>
        </RBtn>
        <Link to="" style={{ marginRight: 30 }}>
          退出登录
        </Link>
      </Head>
      <BlockO />
      <BlockB />
      <BigText>
        <p>WELCOME</p>
        <p>TO</p>
        <p>ALPHA</p>
      </BigText>
      <Slogon>
        <img src="/coin.png" width="65px" height="60px" />
        <p style={{ marginTop: 30 }}>欢迎来到 alpha 多方资产托管客户端</p>
        <p>我们将为您提供更安全的资产管理方式</p>
        <p style={{ marginTop: 30 }}>
          亲爱的老马，欢迎您来到 alpha 多方资产托管平台，
        </p>
        <p> 请选择您要进行的操作：</p>
        <MT120>
          <HorizonLayout>
            <Button
              style={{
                background: "#2D2D2D",
                color: "#fff",
                width: 200,
                marginRight: 120
              }}
            >
              <Link to="/trusteeship">资产托管</Link>
            </Button>
            <Button
              style={{ background: "#FF7023", color: "#fff", width: 200 }}
            >
              <Link to="/usage">资产使用</Link>
            </Button>
          </HorizonLayout>
        </MT120>
      </Slogon>
    </Bg>
  );
}

export default Index;
