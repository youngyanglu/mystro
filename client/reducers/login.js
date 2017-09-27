const initialState = {
  'login': false,
  'accessToken': null
}

const login = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return Object.assign({}, state, {
        login: true,
        accessToken: action.accessToken
      })
    case 'LOGOUT':
      state[login] = false;
      return Object.assign({}, state, {
        login: false,
        accessToken: null
      })
    default:
      return state
  }
}

export default login;
