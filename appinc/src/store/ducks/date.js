export const Types = {
  SUBMIT: 'date/SUBMIT',
};

const InitialState = {
  data: [],
};

export default function date(state = InitialState, action) {
  switch (action.type) {
    case Types.SUBMIT:
      return { data: action.payload.data };
    default:
      return state;
  }
}

export const Creators = {
  submitDATE: data => ({
    type: Types.SUBMIT,
    payload: { data },
  })
};
