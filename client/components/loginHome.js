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
var creds = require('./auth0-credentials');
const auth0 = new Auth0(creds);

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
            fetch(`https://mystroapp.auth0.com/api/v2/users/${responsejson.sub}`,
              { method: 'GET',
                qs: { fields: 'user_metadata', include_fields: 'true' },
                headers:
                { 'content-type': 'application/json',
                  authorization: `Bearer ${creds.APItoken}` }
              })
              .then(response => response.json())
              .then(responsejson => {
                Alert.alert(JSON.stringify(responsejson.user_metadata))
              })
          })
          .catch(err => {
          })
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
