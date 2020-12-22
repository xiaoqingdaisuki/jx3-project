import React from "react";
import "./LeftSider.less";
import { Layout } from "antd";

interface LeftSiderProps {
  isShow: boolean;
  children?: React.ReactNode | React.FC;
}

const LeftSider: React.FC<LeftSiderProps> = (props) => {
  const { isShow } = props;
  const { Sider } = Layout;

  return (
    <Sider width={300} theme="light" className={isShow ? "" : "hide"}>
      <div className="sider-left">左边栏</div>
    </Sider>
  );
};

export default LeftSider;
