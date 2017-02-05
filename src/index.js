import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './core/store';
import { Router, browserHistory } from 'react-router';
import routes from './core/router';

ReactDOM.render(
  <Provider store={store}>
      <Router history={browserHistory} routes={routes}/>
  </Provider>
  , document.getElementById('app'));
