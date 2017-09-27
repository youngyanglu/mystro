import {connect} from 'react-redux';
import LoginHome from '../components/loginHome';
import login from '../actions/login';

const mapStateToProps = state => {
  return {
    login: state.login
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLoggedIn: (accessToken) => {
      dispatch(login.login(accessToken));
    }
  }
}

const LoginHomeContainer = connect(
  mapStateToProps,
)(LoginHome)

export default LoginHomeContainer;
