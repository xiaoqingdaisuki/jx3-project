import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from "../pages/App.tsx";
import NoFound from "../pages/NoFound.tsx";

class ReactRouter extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={App} />
          <Route component={NoFound} />
        </Switch>
      </Router>
    );
  }
}

export default ReactRouter;
