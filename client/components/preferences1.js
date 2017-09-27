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

const ActiveApp = ['Uber', 'Lyft'];
const timeOut = ['Always', 'No ride for 5 mins', 'No ride for 10 mins', 'No ride for 20 mins'];

class Preference1 extends Component {
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
            What app should always be active?
          </Text>
        </Row>
        <Row size={1} >
          {ActiveApp.map(app => (
            <Col key = {app}>
              <Button
                title = {app}
                onPress = {() => this.handlePress('activeApp', app)}
              />
            </Col>
          ))}
        </Row>
        <Row size={1}>
          <Text h4>
          And when should the other come on-line?
          </Text>
        </Row>
        <Row size={3}>
          {timeOut.map(time => (
            <Col key = {time}>
              <Button
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
