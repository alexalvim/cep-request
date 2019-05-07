import { call, put } from 'redux-saga/effects'

import { getInfoByCep } from '../api';
import { cepFetchSuccess, cepFetchFailure } from '../actions/cep';

export function* fetchCep(action) {
  try {
    const cepInfo = yield call(getInfoByCep, action.payload);
    yield put(cepFetchSuccess(cepInfo));
  } catch (e) {
    yield put(cepFetchFailure());
  }
}