import {
  AUTH_USER,
  UNAUTH_USER
} from './../constants';

export const logIn = (userName) => {
  return {
    type: AUTH_USER,
    payload: userName
  }
}

export const logOut = () => {
  return {
    type: UNAUTH_USER
  }
}