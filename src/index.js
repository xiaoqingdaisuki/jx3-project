import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import moment from "moment";
import "./assets/css/common.less";
import Index from "./layout/index.tsx";
import NoFound from "./components/NoFound.tsx";

React.Component.prototype.$moment = moment;

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={Index} />
      <Route component={NoFound} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
