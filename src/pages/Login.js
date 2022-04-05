import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import loginAction from '../redux/actions';
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

  handleClick = () => {
    const { inputName, inputEmail } = this.state;
    const user = { name: inputName, gravatarEmail: inputEmail };
    const { dispatchLogin } = this.props;
    dispatchLogin(user);
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
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  dispatchLogin: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  dispatchLogin: (user) => dispatch(
    loginAction(user),
  ),
});

export default connect(null, mapDispatchToProps)(Login);
