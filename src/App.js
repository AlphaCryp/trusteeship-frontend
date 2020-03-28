import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Register from "./pages/register";
import Login from "./pages/login";
import Index from "./pages";
import {ConfigProvider} from "antd";
import zhCN from 'antd/es/locale/zh_CN';
import 'antd/dist/antd.less';
import Trusteeship from "./pages/trusteeship";
import Usage from "./pages/Usage";
import Recover from "./pages/recover";

export default function App() {
  return (
    <ConfigProvider locale={zhCN}>
      <Router>
        <Switch>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/trusteeship">
            <Trusteeship />
          </Route>
          <Route path="/usage">
            <Usage />
          </Route>
          <Route path="/recover">
            <Recover />
          </Route>
          <Route path="/">
            <Index />
          </Route>
        </Switch>
      </Router>
    </ConfigProvider>
  );
}
