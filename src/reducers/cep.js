const initialState = {
  cepNumber: '',
  uf: '',
  locale: '',
  place: '',
  hasError: false,
  isLoading: false,
};
export const cepReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CEP_FETCH_SUCCESS':
      return {
        ...state,
        cepNumber: action.payload.cep,
        uf: action.payload.uf,
        locale: action.payload.localidade,
        place: action.payload.logradouro,
        isLoading: false,
        hasError: false
      };
    case 'CEP_FETCH_FAILURE':
      return {
        ...state,
        cepNumber: '',
        uf: '',
        locale: '',
        place: '',
        isLoading: false,
        hasError: true
      };
    case 'CEP_FETCH_REQUEST':
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
};