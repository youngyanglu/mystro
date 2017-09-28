import React, { Component } from 'react';
import {
  Alert,
  Text,
} from 'react-native'
import { Col, Row, Grid } from "react-native-easy-grid";
import { Button } from 'react-native-elements';
import preferenceActions from '../actions/preferences';
import {preferencenum as styles} from '../styling/styles';
import {connect} from "react-redux";

const mapStateToProps = state => {
  return {
    preferences: state.preferences,
  }
}

const ActiveApp = ['Uber', 'Lyft'];
const timeOut1 = ['Always', 'No ride for 5 mins'];
const timeOut2 = ['No ride for 10 mins', 'No ride for 20 mins'];

class Preference1 extends Component {
  constructor(props) {
    super(props);
    this.handlePress = this.handlePress.bind(this);
  }

  handlePress = (preference, choice) => {
    this.props.dispatch(preferenceActions.setPreference(preference, choice))
  }
  render () {
    console.log(styles.text, 'text')
    return (
      <Grid>
        <Row size={1}>
          <Text style={styles.text} >
            What app should always be active?
          </Text>
        </Row>
        <Row size={1} >
          {ActiveApp.map(app => (
            <Col key = {app}>
              <Button
                backgroundColor = {this.props.preferences.activeApp === app? '#df4b01' : '#b7a29a'}
                title = {app}
                onPress = {() => this.handlePress('activeApp', app)}
              />
            </Col>
          ))}
        </Row>
        <Row size={1}>
          <Text style={styles.text} >
          And when should the other come on-line?
          </Text>
        </Row>
        <Row size={1}>
          {timeOut1.map(time => (
            <Col key = {time}>
              <Button
                backgroundColor = {this.props.preferences.timeOut === time? '#df4b01' : '#b7a29a'}
                title = {time}
                onPress = {() => this.handlePress('timeOut', time)}
              />
            </Col>
          ))}
        </Row>
        <Row size={2}>
          {timeOut2.map(time => (
            <Col key = {time}>
              <Button
                backgroundColor = {this.props.preferences.timeOut === time? '#df4b01' : '#b7a29a'}
                title = {time}
                onPress = {() => this.handlePress('timeOut', time)}
              />
            </Col>
          ))}
        </Row>
      </Grid>
    )
  }
}

export default connect(mapStateToProps)(Preference1);
