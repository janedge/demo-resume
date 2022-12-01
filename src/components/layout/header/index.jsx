import React from 'react';

import { Nav } from '@alifd/next';
import './index.scss';
const logo = <div className="logo"></div>;
const info = (
  <div className="info">
    <div>简体中文</div>
    <div>123xxxxx22</div>
  </div>
);
const TheHeader = props => {
  return (
    <Nav
      className="TheHeader"
      header={logo}
      footer={info}
      embeddable
      direction="hoz"
      inlineIndent={30}
      aria-label="global navigation"
      defaultSelectedKeys={['personal']}>
      <Nav.Item key="index">首页</Nav.Item>
      <Nav.Item key="socialRecru">社会招聘</Nav.Item>
      <Nav.Item key="schoolRecru">校园招聘</Nav.Item>
      <Nav.Item key="position">工作城市</Nav.Item>
      <Nav.Item key="personal">个人中心</Nav.Item>
    </Nav>
  );
};

export default TheHeader;
