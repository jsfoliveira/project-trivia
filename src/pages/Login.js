import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import loginAction from '../redux/actions';
import { fetchQuestions, fetchToken, fetchGravatar } from '../redux/actions/asyncActions';
import { requestGravatar } from '../redux/services/APIrequest';
import './Login.css';

// import logo from './trivia.png';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      inputName: '',
      inputEmail: '',
      turnOn: true,
    };
  }

  async componentDidMount() {
    // console.log(await requestToken());
    console.log(await requestGravatar('wendryo.sales@gmail.com'));
  }

  validateForm = () => {
    const { inputName, inputEmail } = this.state;
    if (inputName !== '' && inputEmail !== '') {
      this.setState({
        turnOn: false,
      });
    } else {
      this.setState({
        turnOn: true,
      });
    }
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    }, this.validateForm);
  }

  handleClick = async () => {
    const { inputName, inputEmail } = this.state;

    const {
      tokenToProps,
      questionsToProps,
      token,
      gravatarToProps,
      history,
      dispatchLogin,
    } = this.props;

    const user = { name: inputName, gravatarEmail: inputEmail };
    dispatchLogin(user);
    await tokenToProps();
    localStorage.setItem('token', token);
    questionsToProps(token);
    gravatarToProps(inputEmail);
    history.push('/game');
  }

  render() {
    const { inputName, inputEmail, turnOn } = this.state;
    return (
      <div className="login d-flex justify-content-center align-items-center">
        <form>
          <div className="mb-3">
            <label htmlFor="input-player-name" className="form-label">
              Name
              <input
                type="text"
                className="form-control"
                name="inputName"
                id="input-player-name"
                data-testid="input-player-name"
                onChange={ this.handleChange }
                value={ inputName }
              />
            </label>
          </div>
          <div className="mb-3">
            <label htmlFor="input-gravatar-email" className="form-label">
              Email address
              <input
                type="email"
                className="form-control"
                name="inputEmail"
                id="input-gravatar-email"
                aria-describedby="emailHelp"
                data-testid="input-gravatar-email"
                onChange={ this.handleChange }
                value={ inputEmail }
              />

            </label>
            <div
              id="emailHelp"
              className="form-text"
            >
              We will never share your email with anyone else.
            </div>
          </div>
          <button
            type="button"
            className="btn btn-primary"
            data-testid="btn-play"
            disabled={ turnOn }
            onClick={ this.handleClick }
          >
            Play
          </button>
          <Link to="/setting">
            <button
              type="button"
              data-testid="btn-settings"
            >
              Configurações
            </button>
          </Link>

        </form>
      </div>
    );
  }
}

Login.propTypes = {
  dispatchLogin: PropTypes.func.isRequired,
  tokenToProps: PropTypes.func.isRequired,
  questionsToProps: PropTypes.func.isRequired,
  token: PropTypes.string.isRequired,
  gravatarToProps: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  dispatchLogin: (user) => dispatch(
    loginAction(user),
  ),
  tokenToProps: () => dispatch(fetchToken()),
  questionsToProps: (token) => dispatch(fetchQuestions(token)),
  gravatarToProps: (email) => dispatch(fetchGravatar(email)),
});

export default connect(null, mapDispatchToProps)(Login);
