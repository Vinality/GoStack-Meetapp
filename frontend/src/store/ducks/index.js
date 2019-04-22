import { combineReducers } from "redux";
import history from "../../routes/history";
import { connectRouter } from "connected-react-router";

import user from "./user";
import signup from "./signup";

const reducers = combineReducers({ router: connectRouter(history), user, signup });

export default reducers;
