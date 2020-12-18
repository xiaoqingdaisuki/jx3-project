import React, { useState } from "react";
import "./Header.less";
import { Layout, Menu } from "antd";

const Header: React.FC = (props) => {
  const {} = props;
  const [nav, setNav] = useState(["menu1", "menu2", "menu3"]);
  const { Header } = Layout;

  return (
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
        {nav.map((item, key) => {
          return <Menu.Item key={key}>{item}</Menu.Item>;
        })}
      </Menu>
    </Header>
  );
};

export default Header;
