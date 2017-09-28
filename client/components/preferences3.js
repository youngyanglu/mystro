import React, { Component } from 'react';
import {
  Alert
} from 'react-native'
import { Col, Row, Grid } from "react-native-easy-grid";
import { Text, Button } from 'react-native-elements';
import preferenceActions from '../actions/preferences';
import {connect} from "react-redux";

var creds = require('./auth0-credentials');

const mapStateToProps = state => {
  return {
    preferences: state.preferences,
    login: state.login,
  }
}

const carpool = ['Yes', 'No']
class Preference3 extends Component {
  constructor(props) {
    super(props);
    this.handlePress = this.handlePress.bind(this);
  }
  handlePress = (preference, choice) => {
    this.props.dispatch(preferenceActions.setPreference(preference, choice))
  }
  render () {
    return (
      <Grid>
        <Row size={1}>
          <Text h4>
            Do you want rides from carpool services?
          </Text>
        </Row>
        <Row size={1}>
          {carpool.map(bool => (
            <Col key = {bool}>
              <Button
                title = {bool}
                onPress = {() => this.handlePress('carpool', bool)}
              />
            </Col>
          ))}
        </Row>
        <Row>
          <Button
            onPress = {() => {
              fetch(`https://mystroapp.auth0.com/api/v2/users/${this.props.login.user_id}`,
                { method: 'PATCH',
                  headers:
                  {'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    authorization: `Bearer ${creds.APItoken}` },
                  body: JSON.stringify({
                    "user_metadata": this.props.preferences
                  })
                }
              )
                .then(response => response.json())
                .then(responsejson => {
                  Alert.alert(JSON.stringify(responsejson))
                })
            }}
            title='Submit' />
        </Row>
      </Grid>
    )
  }
}

export default connect(mapStateToProps)(Preference3);
