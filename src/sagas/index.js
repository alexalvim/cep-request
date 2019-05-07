import { call, put, takeLatest } from 'redux-saga/effects'
import { getInfoByCep } from '../api';


function* fetchCep(action) {
  try {
    const cepInfo = yield call(getInfoByCep, action.payload);
    yield put({type: 'CEP_FETCH_SUCCESS', payload: cepInfo});
  } catch (e) {
    yield put({type: 'CEP_FETCH_FAILURE'});
  }
}

function* listener() {
  yield takeLatest('CEP_FETCH_REQUEST', fetchCep);
}

export default listener;