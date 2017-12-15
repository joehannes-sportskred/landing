import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createEpicMiddleware } from 'redux-observable';
// import { ScrollProvider } from 'react-skroll';

import registerServiceWorker from './registerServiceWorker';

import Landing from './components/page/landing';
import Legal from './components/page/legal';
import Tour from './components/page/tour';
import Blog from './components/page/blog';

import reducers from './store/reducers';
import epics from './store/epics';

import './semantic/dist/semantic.css';
import './App.css';

const epicMiddleware = createEpicMiddleware(epics);
const store = createStore(reducers, applyMiddleware(epicMiddleware));
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
        <Route path="/blog" component={Blog} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
