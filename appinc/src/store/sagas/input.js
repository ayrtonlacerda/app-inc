import api from '../../services/api';
import { call, put } from 'redux-saga/effects';

//import { Creators as InputActions } from '../ducks/input';

export function* submitInput(action) {
  try {
    const response = yield call(api.post, '/api/pericia/texto/',
      { example1: action.payload.data }
    );

    //yield put(AlbumsActions.getAlbumSuccess(response.data));
    console.log.tron(action.payload.data);
    console.log.tron(response);
  } catch (err) {
    //yield put(AlbumsActions.getAlbumFailure('Erro ao busca dadaos na api'));
  }
}
