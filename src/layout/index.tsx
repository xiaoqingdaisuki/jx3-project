import React from "react";
import { Layout } from "antd";
import Header from "./Header";
import LeftSider from "./LeftSider";
import Content from "./Content";
import RightSider from "./RightSider";
import Footer from "./Footer";

const BasicLayout: React.FC = () => {
  return (
    <Layout>
      <Header />
      <Layout>
        <LeftSider />
        <Content />
        <RightSider />
      </Layout>
      <Footer />
    </Layout>
  );
};

export default BasicLayout;
