import React from "react";
import "./RightSider.less";
import { Layout } from "antd";

interface RightSiderProps {
  isShow: boolean;
  children?: React.ReactNode | React.FC;
}

const RightSider: React.FC<RightSiderProps> = (props) => {
  const { isShow } = props;
  const { Sider } = Layout;

  return (
    <Sider width={300} theme="light" className={isShow ? "" : "hide"}>
      <div className="sider-right">右边栏</div>
    </Sider>
  );
};

export default RightSider;
