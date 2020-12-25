import React, { useCallback, useEffect, useState } from "react";
import "./Process.less";
import { Card } from "antd";
import Drag from "./Drag";

interface ProcessProps {
  prop: ProcessListItem;
}

export type ProcessListItem = {
  id: number;
  title: string;
  status: boolean;
  windowWidth?: number;
  windowHeight?: number;
  width?: number;
  height?: number;
  position: {
    x: number;
    y: number;
  };
};

const Process: React.FC<ProcessProps> = (props) => {
  const { prop } = props;
  const [limit, setLimit] = useState({});

  useEffect(() => {
    if (prop.windowWidth && prop.windowHeight) {
      setLimit({
        x: prop.windowWidth,
        y: prop.windowHeight,
      });
    }
  }, [prop.windowWidth, prop.windowHeight, prop.width, prop.height]);

  return (
    <Drag
      id={prop.id}
      key={prop.id}
      limit={limit}
      width={prop.width}
      height={prop.height}
      position={prop.position}
    >
      <Card
        className={prop.status === true ? "card" : "card hide"}
        title={prop.title}
        extra={
          <div className="card-btn-group">
            <div className="card-btn-max"></div>
            <div className="card-btn-close"></div>
          </div>
        }
        style={{
          width: prop.width,
          height: prop.height,
        }}
      >
        <div className="card-body">这是一个测试组件</div>
      </Card>
    </Drag>
  );
};

export default Process;
