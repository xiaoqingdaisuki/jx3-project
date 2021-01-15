import React, { useState, useEffect, useCallback } from "react";
import { Layout } from "antd";
import Header from "./Header";
import LeftSider from "./LeftSider";
import Content from "./Content";
import RightSider from "./RightSider";
import Footer from "./Footer";
import throttle from "lodash/throttle";
import { ProcessListItem } from "../components/Process";

const BasicLayout: React.FC = () => {
  const [leftSider, setLeftSider] = useState(true);
  const [rightSider, setRightSider] = useState(true);
  const data: ProcessListItem[] = [
    {
      id: 1,
      title: "program1",
      status: true,
      position: {
        x: 50,
        y: 300,
      },
      width: 300,
      height: 200,
    },
    {
      id: 2,
      title: "program2",
      status: false,
      position: {
        x: 200,
        y: 200,
      },
      width: 300,
      height: 200,
    },
    {
      id: 3,
      title: "program3",
      status: false,
      width: 300,
      height: 200,
      position: {
        x: 0,
        y: 0,
      },
    },
  ];

  const [processList, setProcessList] = useState<ProcessListItem[]>(data);

  const setProcessData = useCallback((params: ProcessListItem): void => {
    const list = [...data];
    if (params.id) {
      for (let i = 0; i < list.length; i++) {
        if (list[i].id === params.id) {
          const obj = Object.assign(list[i], params);
          list[i] = obj;
        }
      }
      console.log(list);
      setProcessList(list);
    }
  }, []);

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
  }, [onResize]);

  return (
    <Layout>
      <Header />
      <Layout>
        {leftSider && <LeftSider data={data} setData={setProcessData} />}
        <Content processList={processList} setData={setProcessData} />
        {rightSider && <RightSider />}
      </Layout>
      <Footer />
    </Layout>
  );
};

export default BasicLayout;
