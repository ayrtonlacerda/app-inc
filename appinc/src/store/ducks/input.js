export const Types = {
  SUBIMIT: 'SUBIMIT',
};

const initialState = {
  data: ['testan'],
};


export default function input(state = initialState, action) {
  switch (action.type) {
    case Types.SUBIMIT:
      return { data: action.payload.data };
    default:
      return state;
  }
}

export const Creators = {
  submitInput: data => ({
    type: Types.SUBIMIT,
    payload: { data },
  }),
};

/*{
type: 'ADD_INPUT'
}*/
