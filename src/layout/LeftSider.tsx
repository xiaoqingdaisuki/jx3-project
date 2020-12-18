import React from "react";
import "./LeftSider.less";
import { Layout } from "antd";

const LeftSider: React.FC = () => {
  const { Sider } = Layout;

  return (
    <Sider width={300} theme="light">
      <div className="sider-left"></div>
    </Sider>
  );
};

export default LeftSider;
