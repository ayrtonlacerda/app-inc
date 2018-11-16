export const Types = {
  SUBMIT: 'geo/SUBMIT',
};

const InitialState = {
  data: [],
};

export default function geolocation(state = InitialState, action) {
  switch (action.type) {
    case Types.SUBMIT:
      return { data: action.payload.data };
    default:
      return state;
  }
}


export const Creators = {
  submitGeoloc: data => ({
    type: Types.SUBMIT,
    payload: { data },
  })
};
