const initialState = {
  'activeApp': null,
  'pickUpDistance': null,
  'timeOut': null,
  'minPassengerRating': null,
  'carpool': null
}

export default preferences = (state = initialState, action) => {
  var preference = action.preference;
  var choice = action.choice;
  switch (action.type) {
    case 'SET_PREFERENCE':
      return Object.assign({}, state, {
        preference: choice
      })
    default:
      return state
  }
}
