import React from "react";
import "./Content.less";
import { Layout } from "antd";
import { ToolListItem } from "./index";
import Process from "../components/Process";

interface ContentProps {
  toolList?: ToolListItem[];
}

const Content: React.FC<ContentProps> = (props) => {
  const { toolList } = props;
  const { Content } = Layout;

  return (
    <Content>
      <div className="main">
        {toolList?.map((item, index) => {
          return <Process process={item} key={index} />;
        })}
      </div>
    </Content>
  );
};

export default Content;
