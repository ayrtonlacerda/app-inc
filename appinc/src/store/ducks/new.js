export const Types = {
  GET_REQUEST: 'new/REQUEST',
  GET_SUCSSES: 'new/SUCSSES',
  GET_FAILURE: 'new/FAILURE',
  GET_REFERENCE: 'nem/GET_REFERENCE',  
};

const InitialState = {
  data: [],
  erro: null,
  load: false,
  sucsses: false,
  form: 'sjahdjkashdkashd',
  reference: null, 
};


export default function newState(state = InitialState, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return { ...state, load: true };
    case Types.GET_SUCSSES:
      return { ...state, data: action.payload, load: false, sucsses: true };
    case Types.GET_FAILURE:
      return state;
    case Types.GET_REFERENCE:
      return { ...state, reference: action.payload.ref};    
    default:
      return state;
  }
}

export const Creators ={
  getReference: ref => ({
    type: Types.GET_REFERENCE,
    payload: { ref },
  }),  
};
