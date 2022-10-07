import {
  GET_USERS_DATA_LOADING,
  GET_USERS_DATA_SUCCESS,
} from '../../constants/actionTypes';
import {getStorageValue} from '../../helpers/storageManager';
import storageKeys from '../../constants/storageKeys';

// getting users from local database
export const getUsers = () => dispatch => {
  dispatch({
    type: GET_USERS_DATA_LOADING,
  });
  getStorageValue(storageKeys.USERS)
    .then(res => {
      dispatch({
        type: GET_USERS_DATA_SUCCESS,
        payload: JSON.parse(res),
      });
    })
    .catch(err => alert('Error in save data'));
};
