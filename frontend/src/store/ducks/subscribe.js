export const Types = {
  SUBSCRIBE_SUCCESS: 'subscribe/SUBSCRIBE_SUCCESS',
  SUBSCRIBE_FAILURE: 'subscribe/SUBSCRIBE_FAILURE',
  SUBSCRIBE_REQUEST: 'subscribe/SUBSCRIBE_REQUEST',
  UNSUBSCRIBE_REQUEST: 'subscribe/UNSUBSCRIBE_REQUEST',
  GET_SUCCESS: 'subscribe/GET_SUCCESS',
  GET_SUBSCRIBED: 'subscribe/GET_SUBSCRIBED',
};

const INITIAL_STATE = {
  data: [],
  error: false,
  loading: false,
  errorMessage: '',
};

export default function subscribe(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_SUBSCRIBED:
      return {
        ...state,
        data: [],
        loading: true,
      };
    case Types.SUBSCRIBE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case Types.UNSUBSCRIBE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case Types.SUBSCRIBE_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case Types.GET_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        loading: false,
      };
    case Types.SUBSCRIBE_FAILURE:
      return {
        ...state,
        error: true,
        errorMessage: action.payload.error,
        loading: false,
      };
    default:
      return state;
  }
}

export const Creators = {
  SubscribeSuccess: () => ({
    type: Types.SUBSCRIBE_SUCCESS,
  }),

  GetSuccess: (data) => ({
    type: Types.GET_SUCCESS,
    payload: { data },
  }),

  GetSubscribed: () => ({
    type: Types.GET_SUBSCRIBED,
    payload: { },
  }),

  SubscribeFailure: (error) => ({
    type: Types.SUBSCRIBE_FAILURE,
    payload: { error },
  }),

  SubscribeMeetup: (id) => ({
    type: Types.SUBSCRIBE_REQUEST,
    payload: { id },
  }),

  UnsubscribeMeetup: (id) => ({
    type: Types.UNSUBSCRIBE_REQUEST,
    payload: { id },
  }),
};
