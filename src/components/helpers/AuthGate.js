import React, { useEffect } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import NavigationService from 'src/services/navigation';
import { checkAuthStatus } from 'src/store/auth/actions';

export const AuthGate = ({ checkAuthStatus, navigation }) => {
  useEffect(() => {
    NavigationService.init(navigation);
    checkAuthStatus();
  }, []);
  return <View />;
};

AuthGate.propTypes = {
  checkAuthStatus: propTypes.func.isRequired,
  navigation: propTypes.object.isRequired,
};

const mapDispatchToProps = { checkAuthStatus };

export default connect(
  null,
  mapDispatchToProps
)(AuthGate);
