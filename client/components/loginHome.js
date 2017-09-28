import React, { Component } from 'react';
import {
  Alert,
  StyleSheet,
  View
} from 'react-native';
import { Button } from 'react-native-elements'
import Auth0 from 'react-native-auth0';
import loginActions from '../actions/login';
import preferenceActions from '../actions/preferences';
import { connect } from 'react-redux'
var creds = require('./auth0-credentials');
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
  }

  _onLogin = () => {
    auth0.webAuth
      .authorize({
        scope: 'openid profile',
        audience: 'https://' + creds.domain + '/userinfo'
      })
      .then(credentials => {
        fetch('https://mystroapp.auth0.com/userinfo', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${credentials.accessToken}`
          },
        })
          .then((response) => response.json())
          .then(responsejson => {
            this.props.dispatch(loginActions.login(credentials.accessToken, responsejson.sub));
            fetch(`https://mystroapp.auth0.com/api/v2/users/${responsejson.sub}`,
              { method: 'GET',
                headers:
                { 'content-type': 'application/json',
                  authorization: `Bearer ${creds.APItoken}` }
              })
              .then(response => response.json())
              .then(responsejson => {
                for (var prop in responsejson.user_metadata) {
                  this.props.dispatch(preferenceActions.setPreference(prop, responsejson.user_metadata[prop]))
                }
              })
              .then(() => {
              })
          })
      })
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
