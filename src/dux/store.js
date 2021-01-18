import { createStore, applyMiddleware, combineReducers } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import reducer from './reducer';

const rootReducer = combineReducers({
    reducer: reducer
})

export default createStore(rootReducer, applyMiddleware(promiseMiddleware)) 