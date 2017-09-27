import React, { Component } from 'react';
import {
  Alert,
  StyleSheet,
  View
} from 'react-native';
import { Button } from 'react-native-elements'
import Auth0 from 'react-native-auth0';
import loginActions from '../actions/login';
import { connect } from 'react-redux'
var credentials = require('./auth0-credentials');
const auth0 = new Auth0(credentials);

const mapStateToProps = state => {
  return {
    login: state.login
  }
}

class LoginHome extends Component {
  constructor(props) {
    super(props);
  }

  _onLogin = () => {
    auth0.webAuth
      .authorize({
        scope: 'openid email',
        audience: 'https://' + credentials.domain + '/userinfo'
      })
      .then(credentials => {
        this.props.dispatch(loginActions.login(credentials.accessToken));
      })
      .catch(error => console.log(error));
  };

  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={this._onLogin}
          title={'Log In or Sign Up'}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  header: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }
});

export default connect(mapStateToProps)(LoginHome)
