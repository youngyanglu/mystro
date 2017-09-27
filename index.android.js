import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Button } from 'react-native-elements';
import LoginHome from './client/components/loginHome';
import LoginForm from './client/components/loginForm';
import RegisterForm from './client/components/registerForm';
import Preferences from './client/components/preferences';
import MyPreferences from './client/components/myPreferences';
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
    fetch('http://10.6.70.188:3000')
      .then((response) => response.json())
      .then((responseJson) => {
        Alert.alert(responseJson);
      })
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
