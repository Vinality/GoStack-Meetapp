import { call, put } from "redux-saga/effects";
import { push } from "connected-react-router";
import api from "../../services/api";
import { Creators as UsersActions } from "../ducks/user";

export function* UserLogin(action) {
  try {
    const { data } = yield call(api.post, "/session", {
      email: action.payload.email,
      password: action.payload.password
    });

    const userData = {
      token: data.auth.token,
      username: data.username,
      email: data.email
    };

    yield put(UsersActions.UserLoginSuccess(userData));
    yield put(push("/dashboard"));
  } catch (err) {
    yield put(UsersActions.UserLoginFailure("Usuário ou senha incorretos!"));
  }
}

export function* UserUpdateProfile(action) {
  try {
    const config = {
      headers: { Authorization: "bearer " + action.payload.token }
    };

    const { data } = yield call(
      api.put,
      "/users/update",
      {
        username: action.payload.username,
        password: action.payload.password
      },
      config
    );

    const userData = {
      username: action.payload.username,
      token: data.token
    };

    yield put(UsersActions.UserUpdateProfileSuccess(userData));
  } catch (err) {
    yield put(
      UsersActions.UserUpdateProfileFailure("Falha ao atualizar usuário")
    );
  }
}
