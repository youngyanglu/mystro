import {Alert} from 'react-native';

const initialState = {
  'activeApp': null,
  'pickUpDistance': null,
  'timeOut': null,
  'minPassengerRating': null,
  'carpool': null
}

const preferences = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PREFERENCE':
      return Object.assign({}, state, {
        [action.preference]: action.choice
      })
    default:
      return state
  }
}

export default preferences;
