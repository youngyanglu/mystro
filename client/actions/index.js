module.exports.setPreference = (preference, choice) => {
  return {
    type: 'SET_PREFERENCE',
    preference,
    choice
  }
}
