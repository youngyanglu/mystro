import { createStore, combineReducers } from 'redux';
import preferences from './reducers/index';

const reducer = combineReducers({ preferences });

export default createStore(reducer);
