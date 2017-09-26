import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Button } from 'react-native-elements';
import LoginHome from './components/loginHome';
import LoginForm from './components/loginForm';
import RegisterForm from './components/registerForm';
import { StackNavigator } from 'react-navigation';

export default mystroApp = StackNavigator({
  Home: { screen: LoginHome},
  Login: { screen: LoginForm },
  Register: { screen: RegisterForm},
});

AppRegistry.registerComponent('mystroApp', () => mystroApp);
