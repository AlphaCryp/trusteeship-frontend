import React from "react";
import styled from "styled-components";
import { ContentBlock, HorizonLayout } from "./layouts";
import { Link } from "react-router-dom";

const Header = styled.div`
  background: #2d2d2d;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Slogon = styled.div`
  font-size: 14px;
  font-weight: 500;
  margin-left: 10px;
  color: rgba(255, 112, 35, 1);
`;

const Logout = styled.a`
  color: #fff;
`;
function HeaderB(props) {
  return (
    <Header>
      <ContentBlock>
        <Link to="/">
          <HorizonLayout>
            <img src="coin.png" alt="" height="38" width="40" />
            <Slogon>ALPHA 多方资产管理系统</Slogon>
          </HorizonLayout>
        </Link>
        <Link to="/">
          <Logout>退出登录</Logout>
        </Link>
      </ContentBlock>
    </Header>
  );
}

export default HeaderB;
