import { cepReducer } from './cep';
import { combineReducers } from 'redux';

export const Reducers = combineReducers({
  cepState: cepReducer
});