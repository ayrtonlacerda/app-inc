import api from '../../services/api';
import { call, put } from 'redux-saga/effects';

export function* submitGeoloc(action) {
  console.tron.log(action.payload.data);
  try {
    const response = yield call(api.post, '/api/pericia/texto/',
      { geoloc: action.payload.data }
    );

    console.tron.log(response);
    console.tron.log('response');
  } catch (err) {
    //yield
    console.tron.log('erro');
    console.tron.log(err);
  }
}
