import { ADD_USER_ERROR, ADD_USER_SUCCESS, LOGIN_USER_SUCCESS, LOGIN_USER_ERROR, LOGOUT_USER_SUCCESS } from "../actionTypes";

const initState = {
  user: '',
  registerError: null,
  loginError: null
};

const reducer = (state = initState, action) => {
  switch(action.type) {
    case ADD_USER_SUCCESS:
      return {...state, user: action.user, registerError: null};
    case ADD_USER_ERROR:
      return {...state, registerError: action.error};
    case LOGIN_USER_SUCCESS:
      return {...state, user: action.user, loginError: null};
    case LOGIN_USER_ERROR:
      return {...state, loginError: action.error};
    case LOGOUT_USER_SUCCESS:
      return {...state, user: null};
    default:
      return state;
  }
};

export default reducer;