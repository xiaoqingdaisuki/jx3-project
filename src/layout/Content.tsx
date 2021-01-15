import React, { useState, useCallback } from "react";
import "./Content.less";
import { Layout } from "antd";
import { ProcessListItem } from "../components/Process";
import Process from "../components/Process";

interface ContentProps {
  processList?: ProcessListItem[];
  setData?: Function;
}

const Content: React.FC<ContentProps> = (props) => {
  const { processList, setData } = props;
  const { Content } = Layout;
  const [updatelist, setUpdateList] = useState<ProcessListItem[]>([]);

  // 获取main视窗宽高 此处ref需用callback获取
  const windowRef = useCallback((dom) => {
    setTimeout(() => {
      if (processList) {
        const list = processList.map((item) => {
          return Object.assign(item, {
            windowWidth: dom.offsetWidth,
            windowHeight: dom.offsetHeight,
          });
        });
        setUpdateList(list);
      }
    }, 0);
  }, []);

  return (
    <Content>
      <div className="main" ref={windowRef}>
        {updatelist?.map((item) => {
          return <Process {...item} key={item.id} setData={setData} />;
        })}
      </div>
    </Content>
  );
};

export default Content;
