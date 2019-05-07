import { takeLatest } from 'redux-saga/effects'
import { fetchCep } from './cep';

function* listener() {
  yield takeLatest('CEP_FETCH_REQUEST', fetchCep);
}

export default listener;