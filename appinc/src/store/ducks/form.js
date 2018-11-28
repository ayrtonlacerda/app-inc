const Types = {
  CREATE_FORM: 'form/CREATE_SAVE'
};

const initialState = {
};

export default function formState(state = initialState, action) {
  switch (action.type) {
    case Types.CREATE_FORM:
      return { ...state, ...action.payload.data };
    default:
      return state;
  }
}

export const Creators = {
  getCreateForm: data => ({
    type: Types.CREATE_FORM,
    payload: { data }
  }),
};
