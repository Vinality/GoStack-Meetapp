import { all, takeLatest } from "redux-saga/effects";

import { Types as UsersTypes } from "../ducks/user";
import { Types as SignupTypes } from "../ducks/signup";
import { UserLogin, UserUpdatePreferences, UserUpdateProfile } from "./user";
import { UserSignup } from "./signup";

export default function* rootSaga() {
  yield all([
    takeLatest(UsersTypes.LOGIN_REQUEST, UserLogin),
    takeLatest(UsersTypes.UPDATE_PREFERENCES_REQUEST, UserUpdatePreferences),
    takeLatest(UsersTypes.UPDATE_PROFILE_REQUEST, UserUpdateProfile),
    takeLatest(SignupTypes.SIGNUP_REQUEST, UserSignup)
  ]);
}
