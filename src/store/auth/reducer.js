/* eslint-disable no-param-reassign,no-unused-vars */
import * as actions from './actions';
import handleActions from '../immerHandleActions';

const initialState = Object.freeze({
  isLoggedIn: false,
});

const authReducer = handleActions(
  {
    [actions.loginSuccess]: (draft) => {
      draft.isLoggedIn = true;
    },
    [actions.logoutSuccess]: (draft) => {
      draft.isLoggedIn = false;
    },
    [actions.resetAuthState]: (draft) => {
      draft = initialState;
    },
  },
  initialState
);

export default authReducer;
