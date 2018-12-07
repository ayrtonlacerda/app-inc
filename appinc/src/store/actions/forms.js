const Types = {
  CREATE_FORM: 'form/CREATE_SAVE',
  SAVE_FORM_STATE: 'form/SAVE_FORM_STATE',
  START_SAVE_STEP: 'form/SAVE_STEP_STATE',
  STOP_SAVE_STEP: 'form/STOP_SAVE_STEP',
  START_CONTROL_ARRAY: 'form/START_CONTROL_ARRAY',
};

export const Creators = {
  getCreateForm: data => ({
    type: Types.CREATE_FORM,
    payload: { data }
  }),
  saveStepState: () => ({
    type: Types.START_SAVE_STEP
  }),
  startControlArray: () => ({
    type: Types.START_CONTROL_ARRAY,
  }),
  stopSaveStep: () => ({
    type: Types.STOP_SAVE_STEP
  }),
  getSaveStateForm: data => ({
    type: Types.SAVE_FORM_STATE,
    payload: { data }
  }),
};
