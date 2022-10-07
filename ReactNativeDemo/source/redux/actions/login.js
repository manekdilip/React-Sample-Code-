import {
  LOGIN_FAIL,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
} from '../../constants/actionTypes';
import {setStorageValue} from '../../helpers/storageManager';
import storageKeys from '../../constants/storageKeys';

// login user
export const loginAction = data => dispatch => {
  dispatch({
    type: LOGIN_LOADING,
  });
  setStorageValue(storageKeys.AUTHENTICATED, data?.toString())
    .then(res => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: data,
      });
    })
    .catch(err => {
      dispatch({
        type: LOGIN_FAIL,
        payload: {
          error: 500,
          message: 'Error in save data',
        },
      });
    });
};
