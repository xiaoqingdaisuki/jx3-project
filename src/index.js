import React from "react";
import ReactDOM from "react-dom";
import "./index.less";
import moment from "moment";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Index from "./layout/index.tsx";
import NoFound from "./pages/NoFound.tsx";

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
