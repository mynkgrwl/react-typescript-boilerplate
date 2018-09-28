import { applyMiddleware, combineReducers, createStore, Store, Middleware } from 'redux';
import {routerMiddleware, connectRouter} from 'connected-react-router'
import { createBrowserHistory } from 'history'
import thunk from 'redux-thunk';
import {rootReducer, initialState} from './appReducer';
import api from '../middleware/api';
import {composeWithDevTools} from 'redux-devtools-extension';
let batch = require('redux-batched-actions');
const history = createBrowserHistory()
const composeEnhancers = composeWithDevTools({});
const middleware = [
    routerMiddleware(history),
    thunk,
    api
];

const store: Store<any> = composeEnhancers(applyMiddleware(...middleware))(createStore)(batch.enableBatching(connectRouter(history)(rootReducer)), initialState);
export {store, history};
