import styled from "styled-components";
import React from "react";
import {Link} from "react-router-dom";

export const Head = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  height: 64px;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
`;
export const RBtn = styled("div")`
  border: 1px solid #ff7023;
  border-radius: 20px;
  padding: 8px;
  width: 62px;
  margin-right: 60px;
  text-align: center;
  margin-left: 30px;
  a:-webkit-any-link {
    color: #ff7023 !important;
  }
`;
export const Bg = styled.div`
  background: url("/bg.png");
  width: 100%;
  height: 100%;
  background-size: contain;
  align-items: center;
  justify-content: center;
  background-repeat: repeat-y;
  display: flex;
  p {
    font-size: 3em;
    font-weight: bold;
    padding: 0;
    margin: 0;
    color: rgba(255, 112, 35, 1);
  }
`;

export const BlockO = styled.div`
  position: absolute;
  top: 60px;
  left: 60px;
  width: 60px;
  height: 12px;
  background: rgba(255, 112, 35, 1);
`;
export const BlockB = styled.div`
  position: absolute;
  bottom: 60px;
  right: 60px;
  width: 60px;
  height: 12px;
  background: rgba(45, 45, 45, 1);
`;

export const BigText = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  height: 100%;
  flex-direction: column;
  width: 40%;
  padding-left: 60px;
`;
export const Slogon = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  p {
    font-size: 18px;
    font-weight: 500;
    color: rgba(45, 45, 45, 1);
    line-height: 1.6;
  }
`;
export const HorizonLayout = styled.div`
  display: flex;
`;
export const MT120 = styled.div`
  margin-top: 60px;
`;
export const GreyHalf = styled.div`
  top: 0;
  left: 0;
  width: 50%;
  background: #2d2d2d;
  position: absolute;
  height: 100%;
`;
export const OrangeHalg = styled.div`
  top: 0;
  width: 50%;
  left: 50%;
  background: #ff7023;
  position: absolute;
  height: 100%;
`;
export const MainFormWrapper = styled.div`
  width: 60%;
  height: 460px;
  z-index: 2;
  background: #fff;
  display: flex;
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.2);
`;

const Branding = styled.div`
  background: #ff7023;
  width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const FormContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
const MainForm = props => (
  <MainFormWrapper>
    <Branding>
      <Link to="/">
        <img src="logo.png" alt="" />
      </Link>
    </Branding>
    <FormContent>{props.children}</FormContent>
  </MainFormWrapper>
);

export const BgO = props => (
  <Bg>
    <GreyHalf />
    <OrangeHalg />
    <BlockO />
    <BlockB />
    <MainForm>{props.children}</MainForm>
  </Bg>
);

export const Title = styled.div`
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  margin-bottom: 40px;
  color: rgba(45, 45, 45, 1);
`;
