export const Types = {
  LOGIN_REQUEST: "users/LOGIN_REQUEST",
  LOGIN_SUCCESS: "users/LOGIN_SUCCESS",
  LOGIN_FAILURE: "users/LOGIN_FAILURE",
  UPDATE_REQUEST: "users/UPDATE_REQUEST",
  UPDATE_SUCCESS: "users/UPDATE_SUCCESS",
  UPDATE_FAILURE: "users/UPDATE_FAILURE"
};

const INITIAL_STATE = {
  data: {},
  preferences: {},
  error: false,
  firstAccess: true,
  errorMessage: "",
  login: false
};

export default function users(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.LOGIN_REQUEST:
      return {
        ...state
      };
    case Types.LOGIN_SUCCESS:
      return {
        data: action.payload.data,
        error: false,
        firstAccess: action.payload.data.firstAccess,
        login: true
      };
    case Types.LOGIN_FAILURE:
      return {
        ...state,
        error: true,
        errorMessage: action.payload.error
      };
    case Types.UPDATE_REQUEST:
      return {
        ...state
      };
    case Types.UPDATE_SUCCESS:
      return {
        preferences: action.payload.data,
        error: false,
        firstAccess: false,
      };
    case Types.UPDATE_FAILURE:
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

  UserUpdateRequest: (back, front, mobile, devops, gestao, marketing, token) => ({
    type: Types.UPDATE_REQUEST,
    payload: {
      back,
      front,
      mobile,
      devops,
      gestao,
      marketing,
      token
    }
  }),

  UserUpdateSuccess: data => ({
    type: Types.UPDATE_SUCCESS,
    payload: { data }
  }),

  UserUpdateFailure: error => ({
    type: Types.UPDATE_FAILURE,
    payload: { error }
  })
};
