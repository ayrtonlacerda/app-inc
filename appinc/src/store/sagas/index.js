import { all, takeLatest } from 'redux-saga/effects';

import { Types as InputTypes } from '../ducks/input';
import { submitInput } from './input';

import { Types as GeoTypes } from '../ducks/geolocation';
import { submitGeoloc } from './geolocation';

import { Types as DateAction } from '../ducks/date';
import { submitDATE } from './date';

import { Types as AudioActions } from '../ducks/audiorec';
import { submitAudio } from './audiorec';

import { Types as NewActions } from '../ducks/new';
import { getNew } from './new';


export default function* rootSaga() {
  return yield all([
    takeLatest(InputTypes.SUBIMIT, submitInput),
    takeLatest(GeoTypes.SUBMIT, submitGeoloc),
    takeLatest(DateAction.SUBMIT, submitDATE),
    takeLatest(AudioActions.SUBMIT, submitAudio),
    takeLatest(NewActions.GET_REQUEST, getNew),
  ]);
}
