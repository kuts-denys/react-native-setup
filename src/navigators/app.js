import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { connect } from 'react-redux';
import React from 'react';
import AuthGate from 'src/components/helpers/AuthGate';
import * as actions from 'src/store/app/actions';

import MainNavigator from './main';
import AuthNavigator from './auth';

const AppNavigator = createSwitchNavigator(
  {
    App: MainNavigator,
    Auth: AuthNavigator,
    AuthGate,
  },
  { initialRouteName: 'AuthGate' }
);

const AppContainer = createAppContainer(AppNavigator);

function getActiveRouteName(navigationState) {
  if (!navigationState) {
    return null;
  }
  const route = navigationState.routes[navigationState.index];
  // dive into nested navigators
  if (route.routes) {
    return getActiveRouteName(route);
  }
  return route.routeName;
}
// inject dispatch function into app navigator component
export default connect()(({ dispatch }) => {
  return (
    <AppContainer
      onNavigationStateChange={(prevState, currentState) => {
        const currentScreen = getActiveRouteName(currentState);
        const prevScreen = getActiveRouteName(prevState);

        if (prevScreen !== currentScreen) {
          dispatch(actions.navigationScreenChange(currentScreen));
        }
      }}
    />
  );
});
