/* eslint-disable no-param-reassign,no-unused-vars */
import * as actions from './actions';
import handleActions from '../immerHandleActions';

const initialState = Object.freeze({
  CURRENT_SCREEN: '',
});

const appReducer = handleActions(
  {
    [actions.navigationScreenChange]: (draft, { payload: { currentScreen } }) => {
      draft.CURRENT_SCREEN = currentScreen;
    },
  },
  initialState
);

export default appReducer;
