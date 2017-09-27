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
          <LoginHome/>
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
