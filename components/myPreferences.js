import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Button } from 'react-native-elements';
import { StackNavigator } from 'react-navigation';

export default class MyPreferences extends Component {

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Button
          onPress={() => navigate('Preferences')}
          title="Edit My Preferences"
        />
        <Button
          onPress={() => {}}
          title="Logout"
        />
      </View>
    );
  }
}

