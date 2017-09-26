import React, { Component } from 'react';
import {
} from 'react-native'
import { Col, Row, Grid } from "react-native-easy-grid";
import { Text, Button } from 'react-native-elements';

export default class Preference3 extends Component {
  render () {
    return (
      <Grid>
        <Row size={1}>
          <Text h4>
            Do you want rides from carpool services?
          </Text>
        </Row>
        <Row size={1}>
          <Col>
          <Button
            title='Yes' />
          </Col>
          <Col>
          <Button
            title='No' />
          </Col>
        </Row>
        <Row>
          <Button
            title='Submit' />
        </Row>
      </Grid>
    )
  }
}
