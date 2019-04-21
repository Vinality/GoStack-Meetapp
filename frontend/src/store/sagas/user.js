import { call, put } from "redux-saga/effects";
import { push } from 'connected-react-router';
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
      email: data.email,
      firstAccess: data.firstAccess,
      login: true,
    };

    yield put(UsersActions.UserLoginSuccess(userData));
    if(data.firstAccess)
      yield put(push('/firstaccess'));
    else
      yield put(push('/dashboard'));
  } catch (err) {
    yield put(UsersActions.UserLoginFailure("Usuário ou senha incorretos!"));
  }
}

export function* UserUpdate(action) {
  try {
    const config = {
      headers: { Authorization: "bearer " + action.payload.token }
    };

    yield call(
      api.put,
      "/firstaccess",
      {
        front: action.payload.front,
        back: action.payload.back,
        mobile: action.payload.mobile,
        devops: action.payload.devops,
        gestao: action.payload.gestao,
        marketing: action.payload.marketing
      },
      config
    );

    const userData = {
      front: action.payload.front,
      back: action.payload.back,
      mobile: action.payload.mobile,
      devops: action.payload.devops,
      gestao: action.payload.gestao,
      marketing: action.payload.marketing
    };
    yield put(UsersActions.UserUpdateSuccess(userData));
  } catch (err) {
    yield put(UsersActions.UserUpdateFailure("Falha ao atualizar usuário"));
  }
}
