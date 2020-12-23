import React, { useState, useEffect, useCallback } from "react";
import { Layout } from "antd";
import Header from "./Header";
import LeftSider from "./LeftSider";
import Content from "./Content";
import RightSider from "./RightSider";
import Footer from "./Footer";
import throttle from "lodash/throttle";

export type ToolListItem = {
  id: number;
  title: string;
  status: boolean;
  width?: number;
  position?: {
    x: number;
    y: number;
  };
};

const BasicLayout: React.FC = () => {
  const [leftSider, setLeftSider] = useState(true);
  const [rightSider, setRightSider] = useState(true);
  const data = [
    {
      id: 1,
      title: "program1",
      status: true,
      position: {
        x: 50,
        y: 300,
      },
    },
    {
      id: 2,
      title: "program2",
      status: true,
      position: {
        x: 200,
        y: 200,
      },
    },
    {
      id: 3,
      title: "program3",
      status: true,
    },
  ];
  const [toolList, setToolList] = useState<ToolListItem[]>(data);

  const onResize = useCallback(() => {
    window.innerWidth < 1180 ? setRightSider(false) : setRightSider(true);
    window.innerWidth < 768 ? setLeftSider(false) : setLeftSider(true);
  }, []);

  useEffect(() => {
    onResize();
    window.addEventListener("resize", throttle(onResize, 100));
    return () => {
      window.addEventListener("resize", throttle(onResize, 100));
    };
  });

  return (
    <Layout>
      <Header />
      <Layout>
        {leftSider === true && <LeftSider />}
        <Content toolList={toolList} />
        {rightSider === true && <RightSider />}
      </Layout>
      <Footer />
    </Layout>
  );
};

export default BasicLayout;
