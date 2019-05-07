import cepReducer, { initialState } from '../../src/reducers/cep';


describe('Testing CEP reducer', () => {
  it('should return initial state', () => {
    expect(cepReducer(undefined, { type:'foo' })).toEqual(initialState);
  });

  it('should handle CEP_FETCH_SUCCESS', () => {
    const mockedPayload = {
      cep: 'cepNumber',
      uf: 'uf',
      localidade: 'locale',
      logradouro: 'place',
    };
    const expectedValue = {
      ...initialState,
      cepNumber: mockedPayload.cep,
      uf: mockedPayload.uf,
      locale: mockedPayload.localidade,
      place: mockedPayload.logradouro,
      isLoading: false,
      hasError: false
    };

    expect(
      cepReducer(undefined, { type: 'CEP_FETCH_SUCCESS',
                              payload: mockedPayload }))
      .toEqual(expectedValue);
  });

  it('should handle CEP_FETCH_FAILURE', () => {
    const expectedValue = {
      ...initialState,
      cepNumber: '',
      uf: '',
      locale: '',
      place: '',
      isLoading: false,
      hasError: true
    };

    expect(
      cepReducer(undefined, { type: 'CEP_FETCH_FAILURE' }))
      .toEqual(expectedValue);
  });

  it('should handle CEP_FETCH_REQUEST', () => {
    const expectedValue = {
      ...initialState,
      isLoading: true
    };

    expect(
      cepReducer(undefined, { type: 'CEP_FETCH_REQUEST' }))
      .toEqual(expectedValue);
  });
});