const Types = {
  CREATE_FORM: 'form/CREATE_SAVE',
  SAVE_FORM_STATE: 'form/SAVE_FORM_STATE',
  SAVE_STEP_STATE: 'form/SAVE_STEP_STATE',

};

const initialState = {
  saveStep: null
};

export default function formState(state = initialState, action) {
  switch (action.type) {
    case Types.CREATE_FORM:
      return { ...state, ...action.payload.data };
    case Types.SAVE_FORM_STATE:
      return { ...state, ...action.payload.data };
    case Types.SAVE_STEP_STATE:
      return { ...state, saveStep: true };
    default:
      return state;
  }
}

export const Creators = {
  getCreateForm: data => ({
    type: Types.CREATE_FORM,
    payload: { data }
  }),
  saveStepState: () => ({
    type: Types.SAVE_STEP_STATE
  }),
  getSaveStateForm: data => ({
    type: Types.SAVE_FORM_STATE,
    payload: { data }
  }),
};
