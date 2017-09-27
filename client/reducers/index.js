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
      state[action.preference] = action.choice;
      return state;
    default:
      return state
  }
}

export default preferences;
