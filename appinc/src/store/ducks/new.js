export const Types = {
  GET_REQUEST: 'new/REQUEST',
  GET_SUCSSES: 'new/SUCSSES',
  GET_FAILURE: 'new/FAILURE',
};

const InitialState = {
  data: [],
  erro: null,
  load: false,
  sucsses: false,
};

export default function newState(state = InitialState, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return { ...state, load: true };
    case Types.GET_SUCSSES:
      return { ...state, data: action.payload, load: false, sucsses: true };
    case Types.GET_FAILURE:
      return state;
    default:
      return state;
  }
}

export const Creators = {
  getNewRequest: () => ({
    type: Types.GET_REQUEST,
  }),

  getNewSucsses: data => ({
    type: Types.GET_SUCSSES,
    payload: { data },
  }),

  getNewFailure: erro => ({
    type: Types.GET_FAILURE,
    payload: { erro },
  }),
};
