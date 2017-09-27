import { createStore } from 'redux';
import login from './reducers/login';
import reducer from './reducers/index';

export default createStore(reducer);
