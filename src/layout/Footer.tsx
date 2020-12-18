import React from "react";
import "./Footer.less";
import { Layout } from "antd";

const Footer: React.FC = () => {
  const { Footer } = Layout;

  return (
    <Footer>
      <div className="footer">©2020 Created by xiaoqingdaisuki</div>
    </Footer>
  );
};

export default Footer;
