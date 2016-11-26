// @flow
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import settings from './settings'

export default function getRootReducer(scope = 'main') {
  let reducers = {
    settings
  }

  if (scope = 'renderer') {
    reducers = {
      ...reducers,
      routing
    }
  }

  return combineReducers({...reducers});
}
