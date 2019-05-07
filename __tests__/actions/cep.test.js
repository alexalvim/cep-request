import { cepFetchRequest, cepFetchSuccess, cepFetchFailure } from '../../src/actions/cep';

describe('Cep actions', () => {
  it('should create an action to cep fetch request', () => {
    const mockedPayload = { cepNumber: '000' }
    const expectedAction = {
      type: 'CEP_FETCH_REQUEST',
      payload: mockedPayload
    }
    expect(cepFetchRequest(mockedPayload)).toEqual(expectedAction);
  })

  it('should create an action to cep fetch success', () => {
    const mockedPayload = { foo: 'foo' };
    const expectedAction = {
      type: 'CEP_FETCH_SUCCESS',
      payload: mockedPayload
    }
    expect(cepFetchSuccess(mockedPayload)).toEqual(expectedAction);
  })

  it('should create an action to cep fetch failure', () => {
    const expectedAction = {
      type: 'CEP_FETCH_FAILURE',
    }
    expect(cepFetchFailure()).toEqual(expectedAction);
  })
})