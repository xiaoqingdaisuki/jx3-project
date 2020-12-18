import React from "react";
import "./RightSider.less";
import { Layout } from "antd";

const RightSider: React.FC = () => {
  const { Sider } = Layout;

  return (
    <Sider width={300} theme="light">
      <div className="sider-right"></div>
    </Sider>
  );
};

export default RightSider;
