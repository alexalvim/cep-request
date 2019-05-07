export const cepFetchRequest = payload => ({
  type: 'CEP_FETCH_REQUEST',
  payload
});

export const cepFetchSuccess = payload => ({
  type: 'CEP_FETCH_SUCCESS',
  payload
});

export const cepFetchFailure = () => ({
  type: 'CEP_FETCH_FAILURE',
});