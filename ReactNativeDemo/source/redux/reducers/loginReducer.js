import {
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
} from '../../constants/actionTypes';

const initialState = {
  isLoading: false,
  data: undefined,
  error: null,
};

// Reducer for login user
const loginReducers = (state = initialState, {type, payload}) => {
  switch (type) {
    case LOGIN_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: payload,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export default loginReducers;
