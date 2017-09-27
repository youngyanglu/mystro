import store from '../store';
import * as actions from './index';

module.exports.addUserMessage = (preference, choice) => {
  store.dispatch(actions.setPreference(preference, choice));
}
