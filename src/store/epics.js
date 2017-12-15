import { ajax } from 'rxjs/observable/dom/ajax';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';


import { combineEpics } from 'redux-observable';

import { ACTION } from '../assets/data/enum';

// epic
export const APICallEpic = (action$, lightStore) =>
  action$
    .filter(action => Object.keys(ACTION.API_METHOD).map(key => ACTION.API_METHOD[key]).reduce((acc, cur) => acc || cur === action.type, false))
    .mergeMap(action =>
      ajax.post(action.type, typeof lightStore.getState().api !== 'undefined' ? lightStore.getState().api[action.type] : {})
        .map(response => { type: ACTION.API_METHOD[action.type], response })
    )

export default combineEpics(
  APICallEpic,
);
