import {Alert} from 'react-native'

module.exports.login = (accessToken, user_id) => {
  return {
    type: 'LOGIN',
    accessToken: accessToken,
    user_id: user_id
  }
}

module.exports.logout = () => {
  return {
    type: 'LOGOUT',
  }
}

module.exports.saveAuth = (auth0) => {
  return {
    type: 'SAVE_AUTH0',
    auth0: auth0
  }
}

