import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import registerServiceWorker from './registerServiceWorker';

import Landing from './components/page/landing';
import Legal from './components/page/legal';
import Tour from './components/page/tour';

import reducers from './store/reducers';

import './semantic/dist/semantic.css';
import './App.css';

const store = createStore(reducers);
const history = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/terms" component={Legal.TermsOfUse} />
        <Route path="/privacy" component={Legal.PrivacyPolicy} />
        <Route path="/tour/marketeer" component={Tour.Marketeer} />
        <Route path="/tour/athlete" component={Tour.Athlete} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
