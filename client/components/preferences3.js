import React, { Component } from 'react';
import {
  Text
} from 'react-native'
import { Col, Row, Grid } from "react-native-easy-grid";
import {  Button } from 'react-native-elements';
import preferenceActions from '../actions/preferences';
import { StackNavigator } from 'react-navigation';
import {connect} from "react-redux";
import api from "../api/api";
import {preferencenum as styles} from '../styling/styles';

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
    const navigate = this.props.navigate;
    return (
      <Grid>
        <Row size={1}>
          <Text style={styles.text}>
            Do you want rides from carpool services?
          </Text>
        </Row>
        <Row size={1}>
          {carpool.map(bool => (
            <Col key = {bool}>
              <Button
                backgroundColor = {this.props.preferences.carpool === bool? '#df4b01' : '#b7a29a'}
                title = {bool}
                onPress = {() => this.handlePress('carpool', bool)}
              />
            </Col>
          ))}
        </Row>
        <Row>
          <Col>
          <Button
            large = {true}
            backgroundColor = {'#df4b01'}
            onPress = {() => {
              this.props.dispatch(preferenceActions.submitPreference())
              var preferences = Object.assign({}, this.props.preferences);
              preferences['submitted'] = true;
              api.updateUserData(creds.APItoken, this.props.login.user_id, preferences)
                .then(response => response.json())
                .then(responsejson => {
                })
                .then(() =>{
                  navigate('Home')
                })
            }}
            title='Submit' />
        </Col>
        </Row>
      </Grid>
    )
  }
}

export default connect(mapStateToProps)(Preference3);
