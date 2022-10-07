import {
  CLEAR_DATA,
  SAVE_USERS_DATA_FAIL,
  SAVE_USERS_DATA_LOADING,
  SAVE_USERS_DATA_SUCCESS,
} from '../../constants/actionTypes';

const initialState = {
  isLoading: false,
  data: undefined,
  error: null,
};

// Reducer for save users data
const saveUsersDataReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case SAVE_USERS_DATA_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case SAVE_USERS_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: payload,
      };
    case SAVE_USERS_DATA_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    case CLEAR_DATA:
      return {
        ...state,
        isLoading: false,
        data: undefined,
        error: null,
      };
    default:
      return state;
  }
};

export default saveUsersDataReducer;
