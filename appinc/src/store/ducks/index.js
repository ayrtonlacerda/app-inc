import { combineReducers } from 'redux';

import input from './input';
import geolocation from './geolocation';
import date from './date';
import audiorec from './audiorec';
import newState from './new';

export default combineReducers({
  input,
  geolocation,
  date,
  audiorec,
  newState,
});

/*empty: (state = {}) => state,*/
