const Types = {
  CREATE_FORM: 'form/CREATE_SAVE',
  SAVE_FORM_STATE: 'form/SAVE_FORM_STATE',
  START_SAVE_STEP: 'form/SAVE_STEP_STATE',
  STOP_SAVE_STEP: 'form/STOP_SAVE_STEP',
  START_CONTROL_ARRAY: 'form/START_CONTROL_ARRAY',
  SAVE_FORM: 'form/SAVE_FORM',
};

const initialState = {
  saveStep: null,
  controlArraySize: null,
  step: {},
};

export default function formState(state = initialState, action) {
  switch (action.type) {
    case Types.CREATE_FORM:
      return { ...state, step: { ...state.step, ...action.payload.data } };
    case Types.SAVE_FORM_STATE:
      return { ...state, step: { ...state.step, ...action.payload.data } };
    case Types.START_SAVE_STEP:
      return { ...state, saveStep: true };
    case Types.STOP_SAVE_STEP:
      return { ...state, saveStep: false };
    case Types.START_CONTROL_ARRAY: {
      const status = controlArraySte(state);
      if (!state.controlArraySize) {
        // console.tron.log(['statusIf', status]);
        return { ...state, controlArraySize: status };
      }
      if (!status) {
        // console.tron.log(['status', status]);
        return { ...state, saveStep: status, controlArraySize: null  };
      }
      // console.tron.log(['status', status]);
      return { ...state, controlArraySize: status };
    }
    case Types.SAVE_FORM: {
      saveFormAsync({ ref: action.payload.ref, state })
      return state;
    }
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
  saveForm: ref => ({
    type: Types.SAVE_FORM,
    payload: { ref }
  }),
};

const controlArraySte = state => {
  const arraySize = state.controlArraySize;
  // const statusMaster = true;

  console.tron.log(['arraySize', arraySize]);
  if (!arraySize) {
    const step = state.step;
    const size = Object.keys(step).length;
    // console.tron.log(['return', size]);
    // const status = true;
    return size;
  }
  const size2 = arraySize - 1;
  // console.tron.log(['array', size2]);
  if (size2 === 0) {
    // console.tron.log('entrei no if');
    return false;
  }
  return size2;
};

const saveFormAsync = data => {
  //const form = state.step;
  console.tron.log(["datasaveformasync", data])
  // AsyncStorage.setItem('@Form', JSON.stringify(form));
}