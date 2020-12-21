import React, { useState } from "react";
import { Layout } from "antd";
import Header from "./Header";
import LeftSider from "./LeftSider";
import Content from "./Content";
import RightSider from "./RightSider";
import Footer from "./Footer";

const BasicLayout: React.FC = () => {
  const [leftSider, setLeftSider] = useState(true);
  return (
    <Layout>
      <Header />
      <Layout>
        <LeftSider isShow={leftSider} />
        <Content />
        <RightSider />
      </Layout>
      <Footer />
    </Layout>
  );
};

export default BasicLayout;
