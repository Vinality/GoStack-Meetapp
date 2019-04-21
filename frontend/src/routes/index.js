import React from "react";
import { Switch, Route, BrowserRouter, withRouter } from "react-router-dom";
import { ConnectedRouter } from 'connected-react-router';
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import Dashboard from "../Pages/Dashboard";
import FirstAccess from "../Pages/FirstAccess";

import history from './history';

const Routes = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route path="/" exact component={withRouter(Login)} />
      <Route path="/signup" exact component={Signup} />
      <Route path="/dashboard" exact component={Dashboard} />
      <Route path="/firstaccess" exact component={FirstAccess} />
    </Switch>
  </ConnectedRouter>
);

export default Routes;
