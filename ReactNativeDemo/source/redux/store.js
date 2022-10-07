import {createStore} from 'redux';
import rootReducer from './reducers';

// creating strore
const store = createStore(rootReducer);

export default store;
