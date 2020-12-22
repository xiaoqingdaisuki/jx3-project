import React from "react";
import { Result, Button } from "antd";

const NoFound: React.FC<{}> = () => {
  return (
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
};

export default NoFound;
