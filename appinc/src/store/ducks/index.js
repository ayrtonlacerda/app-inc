import { combineReducers } from 'redux';

import newState from './new';
import formState from './form';

export default combineReducers({
  newState,
  formState,
});

/*empty: (state = {}) => state,*/
