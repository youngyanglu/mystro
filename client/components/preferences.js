import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import {
  View,
  Button,
  Text,
  StatusBar,
  Dimensions
} from 'react-native'
import Swiper from 'react-native-swiper';
import Preferences1 from './preferences1';
import Preferences2 from './preferences2';
import Preferences3 from './preferences3';
import {preferences as styles} from '../styling/styles';

export default class Preferences extends Component {
  constructor(props){
    super(props);
    console.log(props, 'pref')
  }
  static navigationOptions = {
    title: 'Preferences',
  };
  render () {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <StatusBar barStyle='light-content' />
        <Swiper style={styles.wrapper}
          dot={<View style={styles.dot}/>}
          activeDot={<View style={styles.activeDot} />}
          paginationStyle={{
            bottom: 70
          }}
          loop={false}>
          <View style={styles.slide}>
            <Preferences1/>
          </View>
          <View style={styles.slide}>
            <Preferences2/>
          </View>
          <View style={styles.slide}>
            <Preferences3 navigate={navigate}/>
          </View>
        </Swiper>
      </View>
    )
  }
}
