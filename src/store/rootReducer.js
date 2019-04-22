import { combineReducers } from 'redux';
import app from './app/reducer';
import auth from './auth/reducer';

const rootReducer = combineReducers({
  app,
  auth,
});

export default rootReducer;
