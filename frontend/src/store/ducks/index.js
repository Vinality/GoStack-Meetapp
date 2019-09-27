import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import history from '../../routes/history';

import user from './user';
import signup from './signup';
import meetup from './meetup';

const reducers = combineReducers({
  router: connectRouter(history),
  user,
  signup,
  meetup,
});

export default reducers;
