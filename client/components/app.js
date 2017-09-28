import React, { Component } from 'react';
import {
  Alert,
  AppRegistry,
  StyleSheet,
} from 'react-native';
import {connect} from 'react-redux';
import { Button } from 'react-native-elements';
import LoginHome from '../components/loginHome';
import Preferences from './preferences';
import MyPreferences from './myPreferences';
import { StackNavigator } from 'react-navigation';

const MyPreferencesNav = StackNavigator({
  Home: { screen: MyPreferences},
  Preferences: { screen: Preferences},
});

const SetPreferencesNav = StackNavigator({
  Home: { screen: MyPreferences},
  Preferences: { screen: Preferences},
}, {
    initialRouteName: 'Preferences',
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
    if (!this.props.login.login) {
      return(
          <LoginHome/>
      )
    } else if (!this.props.preferences.submitted) {
      return (
        <SetPreferencesNav/>
      )
    } else {
      return (
        <MyPreferencesNav/>
      )
    }
  }
}

export default connect(mapStateToProps)(App);
