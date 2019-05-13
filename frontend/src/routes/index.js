import React from "react";
import { Switch, Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import Dashboard from "../Pages/Dashboard";
import NewMeetup from "../Pages/NewMeetup";
import FirstAccess from "../Pages/FirstAccess";
import Profile from "../Pages/Profile";

import history from "./history";

const Routes = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/signup" exact component={Signup} />
      <Route path="/dashboard" exact component={Dashboard} />
      <Route path="/firstaccess" exact component={FirstAccess} />
      <Route path="/profile" exact component={Profile} />
      <Route path="/new" exact component={NewMeetup} />
    </Switch>
  </ConnectedRouter>
);

export default Routes;
