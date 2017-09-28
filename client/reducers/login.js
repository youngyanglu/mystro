const initialState = {
  'login': false,
  'accessToken': null,
  'user_id': null,
  'auth0': null
}

const login = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return Object.assign({}, state, {
        login: true,
        accessToken: action.accessToken,
        user_id: action.user_id
      })
    case 'LOGOUT':
      return Object.assign({}, state, {
        login: false,
        accessToken: null
      })
    case 'SAVE_AUTH0':
      return Object.assign({}, state, {
        auth0: action.auth0,
      })
    default:
      return state
  }
}

export default login;
