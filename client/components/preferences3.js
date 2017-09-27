import React, { Component } from 'react';
import {
  Alert
} from 'react-native'
import { Col, Row, Grid } from "react-native-easy-grid";
import { Text, Button } from 'react-native-elements';
import preferenceActions from '../actions/preferences';
import {connect} from "react-redux";

const mapStateToProps = state => {
  return {
    preferences: state.preferences,
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
              //Alert.alert(JSON.stringify(this.props.preferences.carpool))
            }}
            title='Submit' />
        </Row>
      </Grid>
    )
  }
}

export default connect(mapStateToProps)(Preference3);
