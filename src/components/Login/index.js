/* eslint-disable no-param-reassign */
import React, { useState } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components/native';
import { Button } from 'react-native-elements';
import NavigationService from 'src/services/navigation';
import { connect } from 'react-redux';
import { loginSuccess } from '../../store/auth/actions';

// just a hook idea
// const useFields = (fields) => {
//   return fields.reduce((result, field) => {
//     const [value, onChangeText] = useState(field.initialValue || '');
//     result[field.name || field] = { value, onChangeText };
//     return result;
//   }, {});
// };

export const Login = ({ loginSuccess }) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const onSubmit = () => {
    if (!name || !password) return;
    if (name === '123' && password === '123') {
      loginSuccess();
      NavigationService.navigate('App');
    }
  };
  return (
    <Container>
      <Label>Username</Label>
      <Input value={name} onChangeText={setName} />
      <Label>Password</Label>
      <Input value={password} onChangeText={setPassword} secureTextEntry />
      <Button containerStyle={{ width: '30%' }} raised title="Submit" onPress={onSubmit} />
    </Container>
  );
};

Login.propTypes = {
  loginSuccess: propTypes.func.isRequired,
};
const Container = styled.View`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;

const Label = styled.Text`
  color: #000;
  margin-bottom: 5px;
`;

const Input = styled.TextInput`
  width: 40%;
  border: 1px solid black;
  padding: 5px 10px;
  margin-bottom: 10px;
  border-radius: 5px;
`;

const mapDispatchToProps = { loginSuccess };

export default connect(
  null,
  mapDispatchToProps
)(Login);
