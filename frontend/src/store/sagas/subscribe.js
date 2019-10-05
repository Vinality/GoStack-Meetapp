import { call, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import api from '../../services/api';
import { Creators as SubscribeActions } from '../ducks/subscribe';

export function* SubscribeToMeetup(action) {
  try {
    const storage = JSON.parse(sessionStorage.getItem('@meetapp:user'));

    const config = {
      headers: { Authorization: `bearer ${storage.token}` },
    };
    yield call(api.post, `/joinmeetup/${action.payload.id}`, {}, config);
    yield put(SubscribeActions.SubscribeSuccess());
    yield put(push('/dashboard'));
  } catch (error) {
    yield put(SubscribeActions.SubscribeFailure(error.message));
  }
}

export function* UnsubscribeToMeetup(action) {
  try {
    const storage = JSON.parse(sessionStorage.getItem('@meetapp:user'));

    const config = {
      headers: { Authorization: `bearer ${storage.token}` },
    };

    yield call(api.post, `/joinmeetup/unsub/${action.payload.id}`, {}, config);
    yield put(SubscribeActions.SubscribeSuccess());
    yield put(push('/dashboard'));
  } catch (error) {
    yield put(SubscribeActions.SubscribeFailure('Erro ao se desinscrever em meetup'));
  }
}

export function* GetSubscriptions() {
  try {
    const storage = JSON.parse(sessionStorage.getItem('@meetapp:user'));

    const config = {
      headers: { Authorization: `bearer ${storage.token}` },
    };

    const { data } = yield call(api.get, '/joinmeetup', config);
    yield put(SubscribeActions.GetSuccess(data));
  } catch (error) {
    yield put(SubscribeActions.SubscribeFailure('Erro ao buscar Meetups'));
  }
}
