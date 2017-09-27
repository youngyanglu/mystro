import store from '../store';
import * as preferences from './preferences';
import * as login from './login';

module.exports.addUserMessage = (preference, choice) => {
  dispatch(preferences.setPreference(preference, choice));
}

module.exports.login = (accessToken) => {
  dispatch(login.login(accessToken));
}

module.exports.logout = () => {
  dispatch(login.logout());
}
