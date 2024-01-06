import React from 'react';
import { SettingOutlined } from '@ant-design/icons';
import { Result } from 'antd';
const InDevelopmentPage = () => (
  <Result
    icon={<SettingOutlined spin />}
    title="Tính năng đang được phát triển (^.^)"
  />
);
export default InDevelopmentPage;