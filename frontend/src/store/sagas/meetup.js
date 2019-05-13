import { call, put } from "redux-saga/effects";
import api from "../../services/api";
import { Creators as MeetupActions } from "../ducks/meetup";
import { push } from "connected-react-router";

export function* CreateMeetup(action) {
  try {
    const { token, ...send } = action.payload;
    const config = {
      headers: { Authorization: "bearer " + token }
    };

    const { data } = yield call(
      api.post,
      "/meetups",
      send,
      config
    );

    yield put(MeetupActions.MeetupSuccess(data));
    yield put(push("/dashboard"));
  } catch (err) {
    yield put(MeetupActions.MeetupFailure("Falha ao criar novo meetup"));
  }
}

export function* GetMeetup(action) {
  try {
    const config = {
      headers: { Authorization: "bearer " + action.payload.token }
    };

    const { payload: meetup } = action;
    const { data } = yield call(api.get, `/meetups/${meetup.id}`, config);
    yield put(MeetupActions.MeetupSuccess(data));
  } catch (error) {
    yield put(MeetupActions.MeetupFailure("Erro ao buscar o Meetup"));
  }
}
