module.exports.setPreference = (preference, choice) => {
  return {
    type: 'SET_PREFERENCE',
    preference: preference,
    choice: choice
  }
}

module.exports.clearPreference = () => {
  return {
    type: 'CLEAR_PREFERENCE',
  }
}

module.exports.submitPreference = () => {
  return {
    type: 'SUBMIT',
  }
}
