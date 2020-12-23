import React from "react";
import "./RightSider.less";
import { Layout } from "antd";

interface RightSiderProps {
  children?: React.ReactNode | React.FC;
}

const RightSider: React.FC<RightSiderProps> = (props) => {
  const { Sider } = Layout;

  return (
    <Sider width={300} theme="light" className="sider-right">
      <div>右边栏</div>
    </Sider>
  );
};

export default RightSider;
