import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { FormLabel, FormInput } from 'react-native-elements'

export default class RegisterForm extends Component {
  static navigationOptions = {
    title: 'Register',
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
      <FormLabel>Email</FormLabel>
      <FormInput onChangeText={text => {}}/>
      <FormLabel>Password</FormLabel>
      <FormInput onChangeText={text => {}} secureTextEntry={true}/>
      <FormLabel>Retype Password</FormLabel>
      <FormInput onChangeText={text => {}} secureTextEntry={true}/>
      </View>
    );
  }
}

