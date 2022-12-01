import React, { useState } from 'react';
import { Shell, Icon } from '@alifd/next';
import './index.scss';

import TheHeader from './header/index';
import TheAside from './aside/index';
export default function Resume(props) {
  const [colFlag, setColFlag] = useState(false);
  return (
    <div className="resume">
      <Shell device="desktop" style={{ border: '1px solid #eee' }}>
        {/* todo：顶部导航 */}
        <Shell.Navigation direction="hoz" align="center">
          <TheHeader></TheHeader>
        </Shell.Navigation>
        {/* 侧边栏 */}
        <Shell.Navigation collapse={colFlag} trigger={null}>
          <TheAside></TheAside>
          <div
            className="nav-trigger"
            style={{ display: 'none' }}
            role="button"
            tabIndex="0"
            aria-expanded="true"
            aria-label="toggle">
            <Icon type="toggle-left" onClick={() => setColFlag(!colFlag)} />
          </div>
        </Shell.Navigation>

        <Shell.Content>{props.children}</Shell.Content>
      </Shell>
    </div>
  );
}
