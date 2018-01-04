import { Observable } from 'rxjs/Observable';
import { ajax, ofType } from 'rxjs/observable/dom/ajax';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';

import { actions as stateHistory } from 'redux-undo-redo';

import { combineEpics } from 'redux-observable';

import { ACTION } from '../assets/data/enum';

// epic
export const APICallEpic = (action$, lightStore) =>
  action$
    .ofType(...Object.keys(ACTION.API_METHOD).map(key => ACTION.API_METHOD[key]))
    .mergeMap(action => {
      const API = action.type + (action.subType ? '/' + action.subType.replace(/( |\/)/, '_').toLowerCase() : '');
      return ajax.post(API, typeof lightStore.getState().api !== 'undefined' ? lightStore.getState().api[Object.entries(ACTION.API_METHOD).filter(pair => pair[1] === action.type)[0][0]] : {})
        .map(response => { type: ACTION.API_METHOD[action.type], response })
        .catch(error => {
          console.log(error);
          return Observable
            .of({
            	...stateHistory.undo(),
            	payload: error.xhr.response,
            	error: true
            })
            //.delay(1000);
        });
    })

export default combineEpics(
  APICallEpic,
);
