export const Types = {
  SIGNUP_REQUEST: 'signup/SIGNUP_REQUEST',
  SIGNUP_SUCCESS: 'signup/SIGNUP_SUCCESS',
  SIGNUP_FAILURE: 'signup/SIGNUP_FAILURE',
};

const INITIAL_STATE = {
  data: null,
  error: false,
  errorMessage: '',
};

export default function signup(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SIGNUP_REQUEST:
    case Types.SIGNUP_SUCCESS:
      return {
        data: action.payload.data,
        error: false,
      };
    case Types.SIGNUP_FAILURE:
      return {
        ...state,
        error: true,
        errorMessage: action.payload.error,
      };
    default:
      return state;
  }
}

export const Creators = {
  UserSignupRequest: (username, email, password) => ({
    type: Types.SIGNUP_REQUEST,
    payload: { username, email, password },
  }),

  UserSignupSuccess: (data) => ({
    type: Types.SIGNUP_SUCCESS,
    payload: { data },
  }),

  UserSignupFailure: (error) => ({
    type: Types.SIGNUP_FAILURE,
    payload: { error },
  }),
};
