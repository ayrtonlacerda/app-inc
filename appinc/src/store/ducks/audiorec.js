export const Types = {
  SUBMIT: 'audio/SUBMIT',
};

const InitialState = {
  data: ['audio recer'],
};

export default function audiorec(state = InitialState, action) {
  switch (action.type) {
    case Types.SUBMIT:
      return { data: action.payload.data };
    default:
      return state;
  }
}


export const Creators = {
  submitAudio: data => ({
    type: Types.SUBMIT,
    payload: { data },
  })
};
