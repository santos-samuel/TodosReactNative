import {LOG_IN, LOG_OUT} from '../actions/authActions';

const initialState = {
  loggedIn: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN: {
      return {...state, loggedIn: true};
    }
    case LOG_OUT: {
      return {...state, loggedIn: false};
    }
    default:
      return state;
  }
};
