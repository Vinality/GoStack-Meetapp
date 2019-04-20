import { call, put } from "redux-saga/effects";
import api from "../../services/api";
import { Creators as UsersActions } from "../ducks/user";

export function* UserLogin(action) {
  try {
    const { data } = yield call(api.post, "/session", {
      email: action.payload.email,
      password: action.payload.password
    });

    const userData = {
      token: data.token
    };
    yield put(UsersActions.UserLoginSuccess(userData));
  } catch (err) {
    yield put(UsersActions.UserLoginFailure("Usuário ou senha incorretos!"));
  }
}
