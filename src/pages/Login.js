import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import loginAction from '../redux/actions';
import { fetchQuestions, fetchToken } from '../redux/actions/asyncActions';
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

  componentDidMount() {
    const { tokenToProps } = this.props;
    tokenToProps();
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
      questionsToProps,
      history,
      dispatchLogin,
    } = this.props;
    const user = { name: inputName, gravatarEmail: inputEmail };
    dispatchLogin(user);

    const { token } = this.props;
    localStorage.setItem('token', token);
    const resposta = await questionsToProps(token);
    console.log(resposta);
    if (resposta.results.length > 0) {
      history.push('/game');
      console.log('XABLAU');
    }
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
  token: PropTypes.string,
  questionsToProps: PropTypes.func.isRequired,
  history: PropTypes.objectOf(PropTypes.string, PropTypes.number).isRequired,
};

Login.defaultProps = {
  token: '',
};

const mapStateToProps = (state) => ({
  token: state.token.token,
  questions: state.questions,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchLogin: (user) => dispatch(
    loginAction(user),
  ),
  tokenToProps: () => dispatch(fetchToken()),
  questionsToProps: (token) => dispatch(fetchQuestions(token)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
