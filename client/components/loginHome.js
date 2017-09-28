import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text
} from 'react-native';
import { Button, Divider } from 'react-native-elements'
import Auth0 from 'react-native-auth0';
import loginActions from '../actions/login';
import preferenceActions from '../actions/preferences';
import { connect } from 'react-redux'
import {loginHome as styles} from '../styling/styles';
import api from '../api/api'
import creds from './auth0-credentials';

const auth0 = new Auth0(creds);

const mapStateToProps = state => {
  return {
    login: state.login,
    preferences: state.preferences
  }
}


class LoginHome extends Component {
  constructor(props) {
    super(props);
    this.props.dispatch(loginActions.saveAuth(auth0))
  }

  _onLogin = () => {
    auth0.webAuth
      .authorize({
        scope: 'openid profile',
        audience: 'https://' + creds.domain + '/userinfo'
      })
      .then(credentials => {
        api.getUserProfile(credentials.accessToken)
          .then((response) => response.json())
          .then(responsejson => {
            this.props.dispatch(loginActions.login(credentials.accessToken, responsejson.sub));
            api.getUserMetadata(creds.APItoken, responsejson.sub)
              .then((response) => response.json())
              .then(responsejson => {
                for (var prop in responsejson.user_metadata) {
                  this.props.dispatch(preferenceActions.setPreference(prop, responsejson.user_metadata[prop]))
                }
              })
              .catch((err) => {
                console.log(err);
              })
          })
          .catch(err => {
            console.log(err);
          })
      })
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>
          Mystro
        </Text>
        <Image
          style={{width: 200, height: 200}}
          source={require('../assets/logo1.png')}
        />
        <Divider style={styles.divider} />
        <Button
          backgroundColor = {'#df4b01'}
          onPress={this._onLogin}
          title={'Log In or Sign Up'}
        />
      </View>
    );
  }
}

export default connect(mapStateToProps)(LoginHome)
