import { combineReducers } from "redux";
import history from "../../routes/history";
import { connectRouter } from "connected-react-router";

import user from "./user";
import signup from "./signup";
import meetup from "./meetup";

const reducers = combineReducers({
  router: connectRouter(history),
  user,
  signup,
  meetup
});

export default reducers;
