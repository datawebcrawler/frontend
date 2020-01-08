import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "./history";

import Main from "./pages/Main";
import Box from "./pages/Box";

const Routes = () => (
  <Router history={history}>
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/box/:id" component={Box} />
    </Switch>
  </Router>
);

export default Routes;
