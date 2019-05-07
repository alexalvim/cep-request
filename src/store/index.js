import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import { Reducers } from '../reducers';
import saga from '../sagas'

const sagaMiddleware = createSagaMiddleware()

export const Store = createStore(Reducers,
                                  applyMiddleware(sagaMiddleware));
                                
sagaMiddleware.run(saga)