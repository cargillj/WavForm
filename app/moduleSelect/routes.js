import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import ModuleSelectContainer from './containers/ModuleSelectContainer';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={ModuleSelectContainer} />
  </Route>
);
