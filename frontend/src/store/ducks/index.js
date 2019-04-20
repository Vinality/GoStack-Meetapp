import { combineReducers } from "redux";

import user from "./user";
import signup from "./signup";

const reducers = combineReducers({ user, signup });

export default reducers;
