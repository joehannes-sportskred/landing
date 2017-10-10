import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { browserHistory } from 'history';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Landing from './components/page/landing';

import reducers from './store/reducers';

import { LINKS } from './assets/data/enum';

import '../build/semantic/dist/semantic.css';

const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Switch>
        <Route path="/" exact component={Landing} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root'),
);
