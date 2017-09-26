import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { FormLabel, FormInput } from 'react-native-elements'
import { Button } from 'react-native-elements';

export default class LoginForm extends Component {
  static navigationOptions = {
    title: 'Login',
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
      <FormLabel>Email</FormLabel>
      <FormInput onChangeText={text => {}}/>
      <FormLabel>Password</FormLabel>
      <FormInput onChangeText={text => {}} secureTextEntry={true}/>
      <Button
        onPress={() => navigate('Preferences')}
        title='Submit' />
      </View>
    );
  }
}

