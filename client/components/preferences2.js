import React, { Component } from 'react';
import {
  Text
} from 'react-native'
import { Col, Row, Grid } from "react-native-easy-grid";
import { Button } from 'react-native-elements';
import preferenceActions from '../actions/preferences';
import {connect} from "react-redux";
import {preferencenum as styles} from '../styling/styles';

const pickUpDistance1 = ['5 mins', '10 mins'];
const pickUpDistance2 = ['20 mins', 'Any'];
const minPassengerRating1 = ['4.5', '4.0'];
const minPassengerRating2 = ['3.5', 'Any'];

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
          <Text style={styles.text}>
            How far will you drive for a pick-up?
          </Text>
        </Row>
        <Row size={1}>
          {pickUpDistance1.map(time => (
            <Col key = {time}>
              <Button
                backgroundColor = {this.props.preferences.pickUpDistance === time? '#df4b01' : '#b7a29a'}
                title = {time}
                onPress = {() => this.handlePress('pickUpDistance', time)}
              />
            </Col>
          ))}
        </Row>
        <Row size={1}>
          {pickUpDistance2.map(time => (
            <Col key = {time}>
              <Button
                backgroundColor = {this.props.preferences.pickUpDistance === time? '#df4b01' : '#b7a29a'}
                title = {time}
                onPress = {() => this.handlePress('pickUpDistance', time)}
              />
            </Col>
          ))}
        </Row>
        <Row size={1.5}>
          <Text style={styles.text}>
            What's the lowest passenger rating you'll accept?
          </Text>
        </Row>
        <Row size={1}>
          {minPassengerRating1.map(rating => (
            <Col key = {rating}>
              <Button
                backgroundColor = {this.props.preferences.minPassengerRating === rating? '#df4b01' : '#b7a29a'}
                key = {rating}
                title = {rating}
                onPress = {() => this.handlePress('minPassengerRating', rating)}
              />
            </Col>
          ))}
        </Row>
        <Row size={2}>
          {minPassengerRating2.map(rating => (
            <Col key = {rating}>
              <Button
                backgroundColor = {this.props.preferences.minPassengerRating === rating? '#df4b01' : '#b7a29a'}
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
