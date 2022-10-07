import {combineReducers} from 'redux';
import getUsersDataReducer from './getUserData';
import saveUsersDataReducer from './saveUsersData';
import loginReducers from './loginReducer';
// combining reducers
const rootReducer = combineReducers({
  getUsersDataReducer,
  saveUsersDataReducer,
  loginReducers,
});

export default rootReducer;
