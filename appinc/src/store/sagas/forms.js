
import { Creators as FormActions } from '../ducks/form';

export function controlArrayStep() {
  const stateForm = 5;
  const step = stateForm;
  const sizeArray = step.length;
  const sizeArray2 = sizeArray - 1;
  if (sizeArray2 <= 0) {
    FormActions.stopSaveStep();
  }
}
