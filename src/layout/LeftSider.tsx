import React, { useEffect, useState, useCallback } from "react";
import "./LeftSider.less";
import { Layout } from "antd";

interface LeftSiderProps {
  isShow: boolean;
  children?: React.ReactNode | React.FC;
}

const LeftSider: React.FC<LeftSiderProps> = (props) => {
  const { isShow } = props;
  const { Sider } = Layout;
  const [show, setShow] = useState<boolean>(isShow);

  const onResize = useCallback(() => {
    if (window.innerWidth < 1024) {
      setShow(false);
    } else {
      setShow(true);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("resize", onResize);
    return () => {
      window.addEventListener("resize", onResize);
    };
  });

  return (
    <Sider width={300} theme="light" className={show ? "" : "hide"}>
      <div className="sider-left">左边栏</div>
    </Sider>
  );
};

export default LeftSider;
