import api from '../../services/api';
import { call, put } from 'redux-saga/effects';

export function* submitAudio(action) {
  console.tron.log(action.payload.data);
  try {
    const audioData = new FormData();

        audioData.append('audio', {
          uri: action.payload.data,
          type: 'audio/acc',
          name: 'example1',
        });

    const response = yield call(api.post, '/api/pericia/teste/', audioData);

    console.tron.log(response);
    console.tron.log('response');
  } catch (err) {
    //yield
    console.tron.log('erro');
    console.tron.log(err);
  }
}
