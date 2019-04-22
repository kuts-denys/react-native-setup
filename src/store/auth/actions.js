import { createAction } from 'redux-actions';

export const checkAuthStatus = createAction('CHECK_AUTH_STATUS');

export const loginSuccess = createAction('LOGIN_SUCCESS');
export const logoutSuccess = createAction('LOGOUT_SUCCESS');
export const resetAuthState = createAction('RESET_AUTH_STATE');
