import React, { useEffect } from 'react';
import { Platform } from 'react-native';
import styled from 'styled-components/native';
import propTypes from 'prop-types';
import { connect } from 'react-redux';

import { logoutSuccess } from 'src/store/auth/actions';
import NavigationService from 'src/services/navigation';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\nCmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\nShake or press menu button for dev menu',
});

const App = ({ logoutSuccess, navigation }) => {
  useEffect(() => {
    navigation.setParams({ title: 'Home' });
  }, []);
  return (
    <Container>
      <Welcome>Welcome to React Native!</Welcome>
      <Instructions>To get started, edit App.js</Instructions>
      <Instructions>{instructions}</Instructions>
      <Button
        onPress={() => {
          NavigationService.navigate('Auth');
          logoutSuccess();
        }}
      >
        <ButtonText>PRESS ME</ButtonText>
      </Button>
    </Container>
  );
};

App.propTypes = {
  logoutSuccess: propTypes.func.isRequired,
  navigation: propTypes.object.isRequired,
};

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #f5fcff;
`;

const Welcome = styled.Text`
  font-size: 40px;
  text-align: center;
  margin: 10px;
  color: ${(props) => props.theme.main};
`;

const Instructions = styled.Text`
  text-align: center;
  color: #333333;
  margin-bottom: 5px;
`;

const Button = styled.TouchableOpacity`
  width: 50%;
  padding: 20px 20px;
  background-color: black;
`;

const ButtonText = styled.Text`
  color: white;
`;

const mapDispatchToProps = {
  logoutSuccess,
};

export default connect(
  null,
  mapDispatchToProps
)(App);
