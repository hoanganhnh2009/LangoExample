import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';
// create store
// applyMiddleware thunk
const store = createStore(reducer);

export default store;
