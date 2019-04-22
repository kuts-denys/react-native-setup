/* eslint-disable react/prop-types */
import { createStackNavigator } from 'react-navigation';
import React from 'react';
import { Header } from 'react-native-elements';
import Home from 'src/components/Home';

const HomeNavigator = createStackNavigator(
  {
    Home,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      header: ({ navigation }) => {
        const title = navigation.getParam('title', 'Default');
        return (
          <Header
            leftComponent={{ icon: 'menu', color: '#fff' }}
            centerComponent={{ text: title, style: { color: '#fff' } }}
            rightComponent={{ icon: 'home', color: '#fff' }}
          />
        );
      },
    },
  }
);

export default HomeNavigator;
