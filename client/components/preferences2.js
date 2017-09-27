import React, { Component } from 'react';
import {
} from 'react-native'
import { Col, Row, Grid } from "react-native-easy-grid";
import { Text, Button } from 'react-native-elements';
import preferenceActions from '../actions/preferences';
import {connect} from "react-redux";

const pickUpDistance = ['5 mins', '10 mins', '20 mins', 'Any'];
const minPassengerRating = ['4.5', '4.0', '3.5', 'Any'];

const mapStateToProps = state => {
  return {
    preferences: state.preferences,
  }
}

class Preference2 extends Component {
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
            How far will you drive for a pick-up?
          </Text>
        </Row>
        <Row size={1}>
          {pickUpDistance.map(time => (
            <Col key = {time}>
              <Button
                title = {time}
                onPress = {() => this.handlePress('pickUpDistance', time)}
              />
            </Col>
          ))}
        </Row>
        <Row size={1}>
          <Text h4>
            What's the lowest passenger rating you'll accept?
          </Text>
        </Row>
        <Row size={2}>
          {minPassengerRating.map(rating => (
            <Col key = {rating}>
              <Button
                key = {rating}
                title = {rating}
                onPress = {() => this.handlePress('minPassengerRating', rating)}
              />
            </Col>
          ))}
        </Row>
      </Grid>
    )
  }
}
export default connect(mapStateToProps)(Preference2);
