import React from 'react';
import { Nav } from '@alifd/next';
import './index.scss';
import { useHistory } from 'react-router-dom';
export default function TheAside() {
  const history = useHistory();
  return (
    <>
      <Nav
        className="aside"
        embeddable
        type="line"
        inlineIndent={30}
        aria-label="global navigation"
        defaultSelectedKeys="resume"
        onSelect={(...rest) => {
          console.log(rest);
        }}>
        <Nav.Item icon="account" key="personalCen" onClick={() => history.push('/home')}>
          个人中心首页
        </Nav.Item>
        <Nav.Item icon="detail" key="resume" onClick={() => history.push('/resume')}>
          我的简历
        </Nav.Item>
      </Nav>
    </>
  );
}
