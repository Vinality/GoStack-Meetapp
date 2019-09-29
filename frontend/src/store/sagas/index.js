import { all, takeLatest } from 'redux-saga/effects';

import { Types as UsersTypes } from '../ducks/user';
import { Types as SignupTypes } from '../ducks/signup';
import { Types as MeetupTypes } from '../ducks/meetup';
import { UserLogin, UserUpdateProfile } from './user';
import { UserSignup } from './signup';
import {
  CreateMeetup, GetMeetup, GetAllMeetups, SubscribeToMeetup, UnsubscribeToMeetup,
} from './meetup';

export default function* rootSaga() {
  yield all([
    takeLatest(UsersTypes.LOGIN_REQUEST, UserLogin),
    takeLatest(UsersTypes.UPDATE_PROFILE_REQUEST, UserUpdateProfile),
    takeLatest(MeetupTypes.CREATE_REQUEST, CreateMeetup),
    takeLatest(MeetupTypes.GET_REQUEST, GetMeetup),
    takeLatest(MeetupTypes.MEETUP_SUBSCRIBE, SubscribeToMeetup),
    takeLatest(MeetupTypes.MEETUP_UNSUBSCRIBE, UnsubscribeToMeetup),
    takeLatest(MeetupTypes.INDEX_REQUEST, GetAllMeetups),
    takeLatest(SignupTypes.SIGNUP_REQUEST, UserSignup),
  ]);
}
