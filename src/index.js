import React from 'react';
import { Provider } from 'react-redux';
import { YellowBox } from 'react-native';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'styled-components/native';
// import I18n from 'redux-i18n';
// import { translations } from './translations/translations';
import AppNavigator from './navigators/app';
import theme from './theme';
import createStore from './store';
// import AppNavigator from './navigators/app-navigator';
// import IsConnected from './containers/NetConnection';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader', 'Setting a timer']);
const { store, persistor } = createStore();
export default () => (
  <React.Fragment>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <AppNavigator />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </React.Fragment>
);
