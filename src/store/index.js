/* eslint-disable global-require,no-undef,no-underscore-dangle */
import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import storage from 'redux-persist/lib/storage';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['auth', 'app'],
};

export const configureStore = ({ initialState, middleware = [] } = {}) => {
  const sagaMiddleware = createSagaMiddleware();
  const devtools =
    typeof window !== 'undefined' &&
    typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === 'function' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      actionsBlacklist: [],
      actionSanitizer: (action) => ({
        ...action,
        type: action.type.toString(),
      }),
    });
  const persistedReducer = persistReducer(persistConfig, rootReducer);
  const composeEnhancers = devtools || compose;
  const store = createStore(
    persistedReducer,
    initialState,
    composeEnhancers(applyMiddleware(...[sagaMiddleware, ...middleware]))
  );
  const persistor = persistStore(store);
  sagaMiddleware.run(rootSaga);
  return { store, persistor };
};

export default configureStore;
