import {
  AUTH_USER,
  UNAUTH_USER
} from './../constants';

const initialState = {
  authenticated: false,
  userName: ""
}

export default (state = initialState, action) => {
  switch(action.type) {
    case AUTH_USER: 
      return {...state, authenticated: true, userName: action.payload};
    case UNAUTH_USER:
      return {...state, authenticated: false, userName: ""}
    default: 
      return state;
  }
}