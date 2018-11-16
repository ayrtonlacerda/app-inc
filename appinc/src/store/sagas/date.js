import api from '../../services/api';
import { call } from 'redux-saga/effects';

export function* submitDATE(action) {
  try {
    const response = yield call(api.post, '/api/pericia/texto/',
        { example1: action.payload.data.date });

    console.tron.log('certp');
    console.tron.log(`payload -> ${action.payload.data.date}`);
    console.tron.log(response);
  } catch (err) {
    console.tron.log('error');
  }
}
