import React, { Component } from 'react';
import {
  View
} from 'react-native';
import { Button, ListItem, Card, Divider } from 'react-native-elements';
import {connect} from 'react-redux';
import { StackNavigator } from 'react-navigation';
import loginActions from '../actions/login';
import preferenceActions from '../actions/preferences';
import {myPreferences as styles} from '../styling/styles';

const mapStateToProps = state => {
  return {
    preferences: state.preferences,
    login: state.login
  }
}

class MyPreferences extends Component {
  constructor(props){
    super(props);
  }

  static navigationOptions = {
    title: 'My Preferences',
  };

  _onLogout() {
    this.props.dispatch(loginActions.logout());
    this.props.dispatch(preferenceActions.clearPreference());
  }

  render() {
    const { navigate } = this.props.navigation;
    const descriptions = {
      'activeApp': "Default Active App",
      'pickUpDistance': "Max Drive Time to Pick Up",
      'timeOut': "Wait Time before Other App",
      'minPassengerRating': "Minimum Passenger Rating",
       'carpool': "Accept Carpool"
    }

    return (
      <View >
        <Card containerStyle={{padding: 0}} >
          {
            Object.keys(this.props.preferences).map((preference) => {
              if (preference !== 'submitted') {
                return (
                  <ListItem
                    hideChevron = {true}
                    key={preference}
                    title={`${descriptions[preference]}: ${this.props.preferences[preference]}`}
                  />
                );
              }
            })
          }
        </Card>
        <Divider style={styles.divider} />
        <Button
          backgroundColor = {'#df4b01'}
          onPress={() => navigate('Preferences')}
          title="Edit My Preferences"
        />
        <Divider style={styles.divider} />
        <Button
          backgroundColor = {'#b7a29a'}
          onPress={this._onLogout.bind(this)}
          title="Logout"
        />
      </View>
    );
  }
}

export default connect(mapStateToProps)(MyPreferences);
