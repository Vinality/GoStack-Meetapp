import { call, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import api from '../../services/api';
import { Creators as MeetupActions } from '../ducks/meetup';

export function* CreateMeetup(action) {
  try {
    const pload = action.payload;
    const config = {
      headers: { Authorization: `bearer ${pload.token}` },
    };

    const formFile = new FormData();
    formFile.append('file', pload.file);

    const configFile = {
      headers: {
        'content-type': 'multipart/form-data',
        Authorization: `bearer ${pload.token}`,
      },
    };

    const fileData = yield call(api.post, '/files', formFile, configFile);

    const send = {
      title: pload.title,
      description: pload.description,
      location: pload.location,
      when: pload.when,
      file_id: fileData.data.id,
    };

    const { data } = yield call(api.post, '/meetups', send, config);

    yield put(MeetupActions.MeetupSuccess(data));
    yield put(push('/dashboard'));
  } catch (err) {
    yield put(MeetupActions.MeetupFailure('Falha ao criar novo meetup'));
  }
}

export function* GetMeetup(action) {
  try {
    const storage = JSON.parse(sessionStorage.getItem('@meetapp:user'));

    const config = {
      headers: { Authorization: `bearer ${storage.token}` },
    };

    const { id } = action.payload;
    const { data } = yield call(api.get, `/meetups/${id}`, config);
    yield put(MeetupActions.MeetupSuccess(data));
  } catch (error) {
    yield put(MeetupActions.MeetupFailure('Erro ao buscar o Meetup'));
  }
}

export function* GetAllMeetups() {
  try {
    const storage = JSON.parse(sessionStorage.getItem('@meetapp:user'));

    const config = {
      headers: { Authorization: `bearer ${storage.token}` },
    };

    const { data } = yield call(api.get, '/meetups', config);
    yield put(MeetupActions.MeetupSuccess(data));
  } catch (error) {
    yield put(MeetupActions.MeetupFailure('Erro ao buscar Meetups'));
  }
}

export function* SubscribeToMeetup(action) {
  try {
    const storage = JSON.parse(sessionStorage.getItem('@meetapp:user'));

    const config = {
      headers: { Authorization: `bearer ${storage.token}` },
    };
    const { data } = yield call(api.post, `/joinmeetup/${action.payload.id}`, {}, config);
    yield put(MeetupActions.MeetupSuccess(data));
  } catch (error) {
    yield put(MeetupActions.MeetupFailure(error.message));
  }
}

export function* UnsubscribeToMeetup(action) {
  try {
    const storage = JSON.parse(sessionStorage.getItem('@meetapp:user'));

    const config = {
      headers: { Authorization: `bearer ${storage.token}` },
    };

    const { data } = yield call(api.post, `/joinmeetup/unsub/${action.payload.id}`, {}, config);
    yield put(MeetupActions.MeetupSuccess(data));
  } catch (error) {
    yield put(MeetupActions.MeetupFailure('Erro ao se desinscrever em meetup'));
  }
}
