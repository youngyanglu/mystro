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
import Preferences from './components/preferences';
import MyPreferences from './components/myPreferences';
import { StackNavigator } from 'react-navigation';

const LoginNav = StackNavigator({
  Home: { screen: LoginHome},
  Login: { screen: LoginForm },
  Register: { screen: RegisterForm},
  Preferences: { screen: Preferences},
});

const PreferencesNav = StackNavigator({
  Home: { screen: MyPreferences},
  Preferences: { screen: Preferences},
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      preferencesSet: false
    }
  }
  render() {
    if (!this.state.preferencesSet) {
      return(
        <LoginNav/>
      )
    } else {
      return (
        <PreferencesNav/>
      )
    }
  }
}

AppRegistry.registerComponent('mystroApp', () => App);
