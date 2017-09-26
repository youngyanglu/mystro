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
const { width, height } = Dimensions.get('window')

const styles = {
  wrapper: {
    // backgroundColor: '#f00'
  },

  slide: {
    flex: 1,
    backgroundColor: 'transparent'
  },
  container: {
    flex: 1,
  },

  imgBackground: {
    width,
    height,
    backgroundColor: 'transparent',
    position: 'absolute'
  },

  image: {
    width,
    height,
  }
}

export default class Preferences extends Component {
  static navigationOptions = {
    title: 'Preferences',
  };
  render () {
    return (
      <View style={styles.container}>
        <StatusBar barStyle='light-content' />
        <Swiper style={styles.wrapper}
          dot={<View style={{backgroundColor: 'rgba(255,255,255,.3)', width: 13, height: 13, borderRadius: 7, marginLeft: 7, marginRight: 7}} />}
          activeDot={<View style={{backgroundColor: '#fff', width: 13, height: 13, borderRadius: 7, marginLeft: 7, marginRight: 7}} />}
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
            <Preferences3/>
          </View>
        </Swiper>
      </View>
    )
  }
}
