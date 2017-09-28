import {Alert} from 'react-native';

const initialState = {
  'activeApp': null,
  'pickUpDistance': null,
  'timeOut': null,
  'minPassengerRating': null,
  'carpool': null,
  'submitted': false,
}

const preferences = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PREFERENCE':
      return Object.assign({}, state, {
        [action.preference]: action.choice
      })
    case 'SUBMIT':
      return Object.assign({}, state, {
        'submitted': true
      })
    case 'CLEAR_PREFERENCE':
      return initialState;
    default:
      return state
  }
}

export default preferences;
