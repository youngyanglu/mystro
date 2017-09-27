import React, { Component } from 'react';
import {
  Alert,
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {connect} from 'react-redux';
import { Button } from 'react-native-elements';
import LoginHomeContainer from '../containers/loginHomeContainer';
import LoginForm from './loginForm';
import RegisterForm from './registerForm';
import Preferences from './preferences';
import MyPreferences from './myPreferences';
import { StackNavigator } from 'react-navigation';

const LoginNav = StackNavigator({
  Home: { screen: LoginHomeContainer},
  Login: { screen: LoginForm },
  Register: { screen: RegisterForm},
  Preferences: { screen: Preferences},
});

const PreferencesNav = StackNavigator({
  Home: { screen: MyPreferences},
  Preferences: { screen: Preferences},
});

const mapStateToProps = state => {
  return {
    login: state.login,
    preferences: state.preferences
  }
}

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const prefSet = Object.values(this.props.preferences).reduce((acc, element) => {
      if (!acc || !element) {
        return false;
      }
    }, true);
    if (!this.props.login.login) {
      return(
          <LoginHomeContainer/>
      )
    } else if (!prefSet) {
      return (
          <Preferences/>
      )
    } else {
      return (
        <PreferencesNav/>
      )
    }
  }
}

export default connect(mapStateToProps)(App);
