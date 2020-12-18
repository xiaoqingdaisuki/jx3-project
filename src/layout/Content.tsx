import React from "react";
import "./Content.less";
import { Layout } from "antd";

const Content: React.FC = () => {
  const { Content } = Layout;

  return (
    <Content>
      <div className="site-layout-content"></div>
    </Content>
  );
};

export default Content;
