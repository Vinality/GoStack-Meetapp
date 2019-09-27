export const Types = {
  CREATE_REQUEST: 'meetup/CREATE_REQUEST',
  MEETUP_SUCCESS: 'meetup/MEETUP_SUCCESS',
  MEETUP_FAILURE: 'meetup/MEETUP_FAILURE',
  MEETUP_SUBSCRIBE: 'meetup/MEETUP_SUBSCRIBE',
  MEETUP_UNSUBSCRIBE: 'meetup/MEETUP_UNSUBSCRIBE',
  GET_REQUEST: 'meetup/GET_REQUEST',
  INDEX_REQUEST: 'meetup/INDEX_REQUEST',
  UPLOAD_FILE: 'meetup/UPLOAD_FILE',
};

const INITIAL_STATE = {
  data: [],
  error: false,
  errorMessage: '',
  file: null,
};

export default function meetup(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
    case Types.INDEX_REQUEST:
    case Types.CREATE_REQUEST:
    case Types.MEETUP_SUBSCRIBE:
    case Types.MEETUP_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
      };
    case Types.MEETUP_FAILURE:
      return {
        ...state,
        error: true,
        errorMessage: action.payload.error,
      };
    case Types.UPLOAD_FILE:
      return {
        ...state,
        file: action.payload.file,
      };
    default:
      return state;
  }
}

export const Creators = {
  MeetupCreateRequest: (title, description, file, when, location, token) => ({
    type: Types.CREATE_REQUEST,
    payload: {
      title,
      description,
      file,
      when,
      location,
      token,
    },
  }),

  MeetupSuccess: (data) => ({
    type: Types.MEETUP_SUCCESS,
    payload: { data },
  }),

  GetRequest: (id) => ({
    type: Types.GET_REQUEST,
    payload: { id },
  }),

  IndexRequest: () => ({
    type: Types.INDEX_REQUEST,
    payload: {},
  }),

  MeetupFailure: (error) => ({
    type: Types.MEETUP_FAILURE,
    payload: { error },
  }),

  UploadMeetupFile: (file) => ({
    type: Types.UPLOAD_FILE,
    payload: { file },
  }),

  SubscribeMeetup: (id) => ({
    type: Types.MEETUP_SUBSCRIBE,
    payload: { id },
  }),

  UnsubscribeMeetup: (id) => ({
    type: Types.MEETUP_UNSUBSCRIBE,
    payload: { id },
  }),
};
