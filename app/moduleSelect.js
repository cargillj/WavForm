// @flow
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import router from './routes';
import configureStore from './store/configureStore';
import './app.global.css';
import { getInitialStateRenderer } from 'electron-redux';

const initialState = getInitialStateRenderer();

const store = configureStore(initialState, "renderer");
const history = syncHistoryWithStore(hashHistory, store);

render(
  <Provider store={store}>
    <Router history={history} routes={route} />
  </Provider>
  document.getElementById('root')
);
