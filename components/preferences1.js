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
           What app should always be active?
          </Text>
        </Row>
        <Row size={1}>
          <Col>
          <Button
            title='Uber' />
          </Col>
          <Col>
          <Button
            title='Lyft' />
          </Col>
        </Row>
        <Row size={1}>
          <Text h4>
          And when should the other come on-line?
          </Text>
        </Row>
        <Row size={3}>
          <Col>
            <Button
              title='Always' />
          </Col>
          <Col>
            <Button
              title='No ride for 5 mins' />
          </Col>
          <Col>
            <Button
              title='No ride for 10 mins' />
          </Col>
          <Col>
            <Button
              title='No ride for 20 mins' />
          </Col>
        </Row>
      </Grid>
    )
  }
}
