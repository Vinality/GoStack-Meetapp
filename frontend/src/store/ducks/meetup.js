export const Types = {
  CREATE_REQUEST: "meetup/CREATE_REQUEST",
  MEETUP_SUCCESS: "meetup/MEETUP_SUCCESS",
  MEETUP_FAILURE: "meetup/MEETUP_FAILURE",
  GET_REQUEST: "meetup/GET_REQUEST"
};

const INITIAL_STATE = {
  data: [],
  error: false,
  errorMessage: ""
};

export default function meetup(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.CREATE_REQUEST:
      return {
        ...state
      };
    case Types.CREATE_SUCCESS:
      return {
        data: action.payload.data,
        error: false
      };
    case Types.CREATE_FAILURE:
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
  MeetupCreateRequest: (
    title,
    description,
    file,
    when,
    location,
    back,
    front,
    mobile,
    devops,
    gestao,
    marketing,
    token
  ) => ({
    type: Types.CREATE_REQUEST,
    payload: {
      title,
      description,
      file,
      when,
      location,
      back,
      front,
      mobile,
      devops,
      gestao,
      marketing,
      token
    }
  }),

  MeetupSuccess: data => ({
    type: Types.MEETUP_SUCCESS,
    payload: { data }
  }),

  MeetupFailure: error => ({
    type: Types.MEETUP_FAILURE,
    payload: { error }
  })
};
