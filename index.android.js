import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import { Provider } from 'react-redux'
import store from './client/store';
import App from './client/components/app';

class AppWrapper extends Component {
  render() {
    return(
        <Provider store={store}>
          <App/>
        </Provider>
    )
  }
}

AppRegistry.registerComponent('mystroApp', () => AppWrapper);
