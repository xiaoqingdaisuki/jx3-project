import React, { useState, useEffect, useCallback } from "react";
import { Layout } from "antd";
import Header from "./Header";
import LeftSider from "./LeftSider";
import Content from "./Content";
import RightSider from "./RightSider";
import Footer from "./Footer";

const BasicLayout: React.FC = () => {
  const [leftSider, setLeftSider] = useState(true);
  const [rightSider, setRightSider] = useState(true);

  const onResize = useCallback(() => {
    window.innerWidth < 1440 ? setRightSider(false) : setRightSider(true);
    window.innerWidth < 1024 ? setLeftSider(false) : setLeftSider(true);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", onResize);
    return () => {
      window.addEventListener("resize", onResize);
    };
  });

  return (
    <Layout>
      <Header />
      <Layout>
        <LeftSider isShow={leftSider} />
        <Content />
        <RightSider isShow={rightSider} />
      </Layout>
      <Footer />
    </Layout>
  );
};

export default BasicLayout;
