const initialState = {
  'login': false,
  'accessToken': null,
  'user_id': null
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
