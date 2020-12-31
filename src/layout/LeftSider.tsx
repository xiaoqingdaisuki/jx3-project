import React, { useState, useEffect } from "react";
import "./LeftSider.less";
import { Layout, Switch, Button } from "antd";

interface LeftSiderProps {
  children?: React.ReactNode | React.FC;
}

interface toolListItem {
  id: number;
  name: string;
  check: boolean;
}

const LeftSider: React.FC<LeftSiderProps> = (props) => {
  const { Sider } = Layout;
  const data = [
    { id: 1, name: "program1", check: false },
    { id: 2, name: "program2", check: false },
    { id: 3, name: "program3", check: false },
  ];
  const [toolList, setToolList] = useState<toolListItem[]>(data);
  const [btnDisabled, setBtnDisabled] = React.useState<boolean>(true);

  const toggle = (e: any): void => {
    setBtnDisabled(!btnDisabled);
    const l = toolList;
    for (let i = 0; i < l.length; i++) {
      if (e.id === l[i].id) {
        l[i].check = !l[i].check;
      }
    }
    setToolList(l);
  };

  const onChange = (checked: boolean) => {
    console.log(checked);
  };

  useEffect(() => {
    setToolList(data);
  }, []);

  return (
    <Sider width={300} theme="light" className="sider-left">
      <div className="tool-list">
        {toolList.map((item, index) => {
          return (
            <div className="tool-list-item" key={item.id}>
              <Button
                type={!btnDisabled ? "primary" : undefined}
                size="large"
                onClick={toggle}
              >
                aaa
              </Button>
              <Switch
                onClick={toggle}
                checkedChildren="开启"
                unCheckedChildren="关闭"
                checked={!btnDisabled}
              />
            </div>
          );
        })}
      </div>
    </Sider>
  );
};

export default LeftSider;
