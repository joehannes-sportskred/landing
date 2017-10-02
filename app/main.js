import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { browserHistory } from 'history';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Intro from './components/page/intro';
import Landing from './components/page/landing';
import Legal from './components/page/legal';
import Tour from './components/page/tour';

import reducers from './store/reducers';

import { LINKS } from './assets/data/enum';

import '../build/semantic/dist/semantic.css';

const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Switch>
        <Route path="/" exact component={Intro} />
        <Route path={`/${LINKS.LANDING}`} component={Landing} />
        <Route path={`/${LINKS.LEGAL.TERMS_OF_USE}`} component={Legal.TermsOfUse} />
        <Route path={`/${LINKS.LEGAL.PRIVACY_POLICY}`} component={Legal.PrivacyPolicy} />
        <Route path={`/${LINKS.TOUR}`} component={Tour.Brand} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root'),
);
