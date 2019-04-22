/* eslint-disable react/prop-types */
import { createStackNavigator } from 'react-navigation';
import Login from 'src/components/Login';

const AuthNavigator = createStackNavigator(
  {
    Login,
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none',
  }
);

export default AuthNavigator;
