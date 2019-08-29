export const Types = {
  LOGIN_REQUEST: "users/LOGIN_REQUEST",
  LOGIN_SUCCESS: "users/LOGIN_SUCCESS",
  LOGIN_FAILURE: "users/LOGIN_FAILURE",
  UPDATE_PROFILE_REQUEST: "users/UPDATE_PROFILE_REQUEST",
  UPDATE_PROFILE_SUCCESS: "users/UPDATE_PROFILE_SUCCESS",
  UPDATE_PROFILE_FAILURE: "users/UPDATE_PROFILE_FAILURE"
};

const INITIAL_STATE = {
  data: {},
  error: false,
  errorMessage: ""
};

export default function users(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.LOGIN_REQUEST:
      return {
        ...state
      };
    case Types.LOGIN_SUCCESS:
      return {
        ...state,
        data: action.payload.data
      };
    case Types.LOGIN_FAILURE:
      return {
        ...state,
        error: true,
        errorMessage: action.payload.error
      };
    case Types.UPDATE_PROFILE_REQUEST:
      return {
        ...state
      };
    case Types.UPDATE_PROFILE_SUCCESS:
      return {
        ...state,
        data: {
          username: action.payload.data.username,
          token: action.payload.data.token
        },
        error: false
      };
    case Types.UPDATE_PROFILE_FAILURE:
      return {
        ...state,
        error: true,
        errorMessage: action.payload.error
      };
    default:
      return state;
  }
}

export const Creators = {
  UserLoginRequest: (email, password) => ({
    type: Types.LOGIN_REQUEST,
    payload: { email, password }
  }),

  UserLoginSuccess: data => ({
    type: Types.LOGIN_SUCCESS,
    payload: { data }
  }),

  UserLoginFailure: error => ({
    type: Types.LOGIN_FAILURE,
    payload: { error }
  }),

  UserUpdateProfileRequest: (token, username, password) => ({
    type: Types.UPDATE_PROFILE_REQUEST,
    payload: {
      token,
      username,
      password
    }
  }),

  UserUpdateProfileSuccess: data => ({
    type: Types.UPDATE_PROFILE_SUCCESS,
    payload: { data }
  }),

  UserUpdateProfileFailure: error => ({
    type: Types.UPDATE_PROFILE_FAILURE,
    payload: { error }
  })
};
