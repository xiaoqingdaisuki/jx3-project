import React, { FC } from "react";
import { Result, Button } from "antd";
import "./NoFound.less";

const NoFound: FC = () => (
  <div className="error">
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Button type="primary" href="/">
          返回首页
        </Button>
      }
    />
  </div>
);

export default NoFound;
