import {
  GET_USERS_DATA_FAIL,
  GET_USERS_DATA_LOADING,
  GET_USERS_DATA_SUCCESS,
} from '../../constants/actionTypes';

const initialState = {
  isLoading: false,
  data: [],
  error: null,
};

// Reducer for users data
const getUsersDataReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case GET_USERS_DATA_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case GET_USERS_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: payload,
      };
    case GET_USERS_DATA_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export default getUsersDataReducer;
