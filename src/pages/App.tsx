import React, { FC, useState } from "react";
import { Result, Button } from "antd";
import "./App.less";

const App: FC = (props) => {
  const [data, setData] = useState(null);
  return (
    <div className="App">
      <Result
        status="success"
        title="Hello world"
        extra={[<Button type="primary">加载成功</Button>]}
      />
    </div>
  );
};

export default App;
