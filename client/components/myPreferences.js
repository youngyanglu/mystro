import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Button, ListItem, Card } from 'react-native-elements';
import {connect} from 'react-redux';
import { StackNavigator } from 'react-navigation';

const mapStateToProps = state => {
  return {
    preferences: state.preferences
  }
}

class MyPreferences extends Component {
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
      <View>
      <Card containerStyle={{padding: 0}} >
        {
          Object.keys(this.props.preferences).map((preference) => {
            return (
              <ListItem
                hideChevron = {true}
                key={preference}
                title={`${descriptions[preference]}: ${this.props.preferences[preference]}`}
              />
            );
          })
        }
      </Card>
        <Button
          onPress={() => navigate('Preferences')}
          title="Edit My Preferences"
        />
        <Button
          onPress={() => {}}
          title="Logout"
        />
      </View>
    );
  }
}

export default connect(mapStateToProps)(MyPreferences);
