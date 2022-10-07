import {
  SAVE_USERS_DATA_FAIL,
  SAVE_USERS_DATA_LOADING,
  SAVE_USERS_DATA_SUCCESS,
  CLEAR_DATA,
} from '../../constants/actionTypes';
import {setStorageValue} from '../../helpers/storageManager';
import storageKeys from '../../constants/storageKeys';

// save ueser to local data base
export const saveUsersData = requestPayload => dispatch => {
  dispatch({
    type: SAVE_USERS_DATA_LOADING,
  });
  setStorageValue(storageKeys.USERS, requestPayload)
    .then(res => {
      dispatch({
        type: SAVE_USERS_DATA_SUCCESS,
        payload: {
          status: 200,
          message: 'Registration Successfull!',
        },
      });
    })
    .catch(err => alert('Error in save data'));
};

export const clearSaveUserResponse = () => dispatch => {
  dispatch({
    type: CLEAR_DATA,
  });
};
