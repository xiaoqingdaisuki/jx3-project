import React, { useState, useCallback, useMemo, useEffect } from "react";
import "./Process.less";
import { Card } from "antd";
import { ToolListItem } from "../layout/index";

interface ProcessProps {
  process: ToolListItem;
}

interface moveProps {
  x?: number;
  y?: number;
}

const Process: React.FC<ProcessProps> = (props) => {
  const { process } = props;
  const [move, setMove] = useState<moveProps>({
    x: process?.position?.x || 0,
    y: process?.position?.y || 0,
  });

  return (
    <Card
      className={process.status === true ? "card" : "card hide"}
      title={process.title}
      extra={
        <div className="card-btn-group">
          <div className="card-btn-max"></div>
          <div className="card-btn-close"></div>
        </div>
      }
      style={{
        width: process?.width || 300,
        left: move.x,
        top: move.y,
      }}
    >
      <div className="card-body">这是一个测试组件</div>
    </Card>
  );
};

export default Process;
