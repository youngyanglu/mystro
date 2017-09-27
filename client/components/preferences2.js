import React, { Component } from 'react';
import {
} from 'react-native'
import { Col, Row, Grid } from "react-native-easy-grid";
import { Text, Button } from 'react-native-elements';

export default class Preference1 extends Component {
  render () {
    return (
      <Grid>
        <Row size={1}>
          <Text h4>
            How far will you drive for a pick-up?
          </Text>
        </Row>
        <Row size={1}>
          <Col>
          <Button
            title='5 mins' />
          </Col>
          <Col>
          <Button
            title='10 mins' />
          </Col>
          <Col>
          <Button
            title='20 mins' />
          </Col>
          <Col>
          <Button
            title='Any' />
          </Col>
        </Row>
        <Row size={1}>
          <Text h4>
            What's the lowest passenger rating you'll accept?
          </Text>
        </Row>
        <Row size={2}>
          <Col>
            <Button
              title='4.5' />
          </Col>
          <Col>
            <Button
              title='4.0' />
          </Col>
          <Col>
            <Button
              title='3.5' />
          </Col>
          <Col>
            <Button
              title='Any' />
          </Col>
        </Row>
      </Grid>
    )
  }
}
