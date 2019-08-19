import { call, put } from "redux-saga/effects";
import api from "../../services/api";
import { Creators as SignupActions } from "../ducks/signup";

export function* UserSignup(action) {
  try {
    const { data } = yield call(api.post, "/users", {
      username: action.payload.username,
      email: action.payload.email,
      password: action.payload.password
    });

    const userData = {
      username: data.username,
      email: data.email
    };
    yield put(SignupActions.UserSignupSuccess(userData));
  } catch (err) {
    yield put(SignupActions.UserSignupFailure("Falha ao criar nova conta"));
  }
}
