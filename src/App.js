import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Register from "./pages/register";
import Login from "./pages/login";
import Index from "./pages";
import {ConfigProvider} from "antd";
import zhCN from 'antd/es/locale/zh_CN';
import 'antd/dist/antd.less';

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
          <Route path="/">
            <Index />
          </Route>
        </Switch>
      </Router>
    </ConfigProvider>
  );
}
