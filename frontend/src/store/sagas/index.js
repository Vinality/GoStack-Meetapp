import { all, takeLatest } from 'redux-saga/effects';

import { Types as UsersTypes } from '../ducks/user';
import { Types as SignupTypes } from '../ducks/signup';
import { Types as MeetupTypes } from '../ducks/meetup';
import { Types as SubscribedTypes } from '../ducks/subscribe';
import { UserLogin, UserUpdateProfile } from './user';
import { UserSignup } from './signup';
import {
  CreateMeetup,
  GetMeetup,
  GetAllMeetups,
} from './meetup';
import {
  SubscribeToMeetup,
  UnsubscribeToMeetup,
  GetSubscriptions,
} from './subscribe';

export default function* rootSaga() {
  yield all([
    takeLatest(UsersTypes.LOGIN_REQUEST, UserLogin),
    takeLatest(UsersTypes.UPDATE_PROFILE_REQUEST, UserUpdateProfile),
    takeLatest(MeetupTypes.CREATE_REQUEST, CreateMeetup),
    takeLatest(MeetupTypes.GET_REQUEST, GetMeetup),
    takeLatest(MeetupTypes.INDEX_REQUEST, GetAllMeetups),
    takeLatest(SubscribedTypes.SUBSCRIBE_REQUEST, SubscribeToMeetup),
    takeLatest(SubscribedTypes.UNSUBSCRIBE_REQUEST, UnsubscribeToMeetup),
    takeLatest(SubscribedTypes.GET_SUBSCRIBED, GetSubscriptions),
    takeLatest(SignupTypes.SIGNUP_REQUEST, UserSignup),
  ]);
}
