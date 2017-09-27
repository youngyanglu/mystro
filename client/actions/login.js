module.exports.login = (accessToken) => {
  return {
    type: 'LOGIN',
    accessToken: accessToken,
  }
}

module.exports.logout = () => {
  return {
    type: 'LOGOUT',
  }
}
