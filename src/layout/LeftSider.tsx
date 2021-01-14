import React, { useState, useCallback } from "react";
import "./LeftSider.less";
import { Layout, Switch, Button } from "antd";
import { ProcessListItem } from "../components/Process";

interface LeftSiderProps {
  data?: ProcessListItem[];
  children?: React.ReactNode | React.FC;
}

const ToolItem: React.FC<ProcessListItem> = (props) => {
  const { title, status } = props;
  const [btnDisabled, setBtnDisabled] = useState<boolean>(status);

  const toggle = useCallback(() => {
    setBtnDisabled(!btnDisabled);
  }, [btnDisabled]);

  return (
    <div className="tool-list-item">
      <Button
        type={btnDisabled ? "primary" : undefined}
        size="large"
        onClick={toggle}
      >
        {title}
      </Button>
      <Switch
        checkedChildren="开启"
        unCheckedChildren="关闭"
        checked={btnDisabled}
        onClick={toggle}
      />
    </div>
  );
};

const LeftSider: React.FC<LeftSiderProps> = (props) => {
  const { data } = props;
  const { Sider } = Layout;

  return (
    <Sider width={300} theme="light" className="sider-left">
      <div className="tool-list">
        {data?.map((item) => {
          return <ToolItem {...item} key={item.id} />;
        })}
      </div>
    </Sider>
  );
};

export default LeftSider;
