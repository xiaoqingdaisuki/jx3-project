import React from "react";
import "./LeftSider.less";
import { Layout } from "antd";

interface LeftSiderProps {
  children?: React.ReactNode | React.FC;
}

const LeftSider: React.FC<LeftSiderProps> = (props) => {
  const { Sider } = Layout;

  return (
    <Sider width={300} theme="light" className="sider-left">
      <div>左边栏</div>
    </Sider>
  );
};

export default LeftSider;
