import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { FormLabel, FormInput, Button } from 'react-native-elements'
import Auth0 from 'react-native-auth0';

const auth0 = new Auth0({ domain: 'mystroapp.auth0.com', clientId: '783HEpX7pzz05kf1KQ75zjUBkhE9BnWu' });

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

