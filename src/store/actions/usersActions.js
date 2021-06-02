import { push } from 'connected-react-router';
import axios from '../../axios-calendar';
import { ADD_USER_ERROR, ADD_USER_SUCCESS, LOGIN_USER_SUCCESS, LOGIN_USER_ERROR, LOGOUT_USER_SUCCESS, LOGOUT_USER, ADD_USER, LOGIN_USER } from "../actionTypes";


export const addUserSuccess = (user) => {
  return {type: ADD_USER_SUCCESS, user};
};

export const addUserError = error => {
  return {type: ADD_USER_ERROR, error};
};

export const addUser = (user) => {  
  return {type: ADD_USER, user};
}

export const loginUserSuccess = user => {  
  return {type: LOGIN_USER_SUCCESS, user};
};

export const loginUserFailure = error => {
  return {type: LOGIN_USER_ERROR, error};
};

export const loginUser = user => {
  return {type: LOGIN_USER, user};
}

export const logoutUser = () => {
  return {type: LOGOUT_USER};
}

export const logoutUserSuccess = () => {
  return {type: LOGOUT_USER_SUCCESS};
}