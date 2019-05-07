import { put } from 'redux-saga/effects';

import { fetchCep } from '../../src/sagas/cep';
import { cepFetchSuccess, cepFetchFailure } from '../../src/actions/cep';

describe('Test Cep Saga', () => {
  it('should success if cep request returns success', () => {
    const action = { type: 'CEP_FETCH_REQUEST', payload: '00000000' };
    const mockedResult = { cepNumber: '00000000' }
    const gen = fetchCep(action);
  
    gen.next();
    expect(gen.next(mockedResult).value).toEqual(put(cepFetchSuccess(mockedResult)));
  });

  it('should fail if cep request returns error', () => {
    const action = { type: 'CEP_FETCH_REQUEST', payload: '00000000' };
    const gen = fetchCep(action);
  
    gen.next();
    expect(gen.throw('error').value).toEqual(put(cepFetchFailure()));
  });
})