import { all, takeLatest } from "redux-saga/effects";

import { Types as UsersTypes } from "../ducks/user";
import { Types as SignupTypes } from "../ducks/signup";
import { UserLogin } from "./user";
import { UserSignup } from "./signup";

export default function* rootSaga() {
  yield all([
    takeLatest(UsersTypes.LOGIN_REQUEST, UserLogin),
    takeLatest(SignupTypes.SIGNUP_REQUEST, UserSignup)
  ]);
}
