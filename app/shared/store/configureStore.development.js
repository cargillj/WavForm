import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { hashHistory } from 'react-router';
import { routerMiddleware, push } from 'react-router-redux';
import createLogger from 'redux-logger';
import getRootReducer from '../reducers';
import {
  forwardToMain,
  forwardToRenderer,
  triggerAlias,
  replayActionMain,
  replayActionRenderer
} from 'electron-redux';

export default function configureStore(initialState, scope = 'main') {
  const actionCreators = {
    push,
  };

  const logger = createLogger({
    level: scope === 'main' ? undefined : 'info',
    collapsed: true
  });

  const router = routerMiddleware(hashHistory);

  const composeEnhancers = compose;

  let middleware = [
    thunk,
  ];

  if (scope === 'renderer') {
    middleware = [
      forwardToMain,
      router,
      ...middleware
    ];
  }

  if (scope === 'main') {
    middleware = [
      triggerAlias,
      ...middleware,
      forwardToRenderer
    ];
  }

  /* eslint-enable no-underscore-dangle */
  const enhancer = composeEnhancers(
    applyMiddleware(...middleware)
  );

  const rootReducer = getRootReducer(scope);

  const store = createStore(rootReducer, initialState, enhancer);

  if (module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(require('../reducers')) // eslint-disable-line global-require
    );
  }

  if (scope === 'main') {
    replayActionMain(store);
  } else {
    replayActionRenderer(store);
  }

  return store;
}
