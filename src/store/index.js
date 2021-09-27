import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';

import reducers from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    reducers,
    compose(applyMiddleware(sagaMiddleware, createLogger()))
);

sagaMiddleware.run(rootSaga);

export default store;
