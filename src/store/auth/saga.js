import { takeLatest, select } from 'redux-saga/effects';
import NavigationService from 'src/services/navigation';
import * as actions from './actions';

function* authController() {
  const isLoggedIn = yield select((state) => state.auth.isLoggedIn);
  if (!isLoggedIn) {
    NavigationService.navigate('Auth');
  } else {
    NavigationService.navigate('App');
  }
}

export default function* AuthSaga() {
  yield takeLatest(actions.checkAuthStatus, authController);
}
