import api from '../../services/api';
import { call, put } from 'redux-saga/effects';

import { Creators as NewActions } from '../ducks/new';

export function* getNew() {
  try {
    const response = yield call(api.get, 'http://35.231.239.168/api/pericia/formularios/');
    console.tron.log(response);
    yield put(NewActions.getNewSucsses(response.data));
  } catch (erro) {
    yield put(NewActions.getNewFailure('Não foi possivel carregar o formulario'));
  }
}
