import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Timer from '../components/Timer';
import { fetchQuestions, fetchToken } from '../redux/actions/asyncActions';
import './Game.css';

class Game extends React.Component {
  constructor() {
    super();
    this.state = {
      answers: [],
      click: false,
    };
  }

  async componentDidMount() {
    const { token, questionsToProps } = this.props;
    await questionsToProps(token);
    this.renderAnswer();
  }

  handleClick = () => {
    this.setState({
      click: true,
    });
  }

  renderAnswer = () => {
    const { questions: { results } } = this.props;
    const random = 0.5;
    const anwsersArray = results[0].incorrect_answers.concat(results[0].correct_answer);
    const shuffledArray = anwsersArray.sort(() => Math.random() - random);
    this.setState({
      answers: shuffledArray,
    });
  }

  render() {
    const { questions: { results } } = this.props;
    const { answers, click } = this.state;
    return (
      <div>
        <h2>Game!</h2>
        <Header />
        <Timer />
        {
          results
          && (
            <div>
              <p data-testid="question-category">{results[0].category}</p>
              <p data-testid="question-text">{results[0].question}</p>
            </div>)
        }
        <div data-testid="answer-options">
          {
            answers
          && (
            answers.map(
              (answer, index) => {
                let testid = '';
                let classe = '';
                const correct = results[0].correct_answer;
                if (answer === correct) {
                  classe = 'correct-answer';
                  testid = 'correct-answer';
                } else {
                  classe = 'wrong-answer';
                  testid = `wrong-answer-${index}`;
                }

                return (
                  <button
                    key={ index }
                    data-testid={ testid }
                    type="button"
                    onClick={ this.handleClick }
                    className={ click ? classe : '' }
                  >
                    {answer}
                  </button>);
              },
            )
          )
          }
        </div>
      </div>
    );
  }
}

Game.propTypes = {
  questions: PropTypes.objectOf(PropTypes.array, PropTypes.string).isRequired,
  questionsToProps: PropTypes.func.isRequired,
  token: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
};

const mapStateToProps = (state) => ({
  token: state.token,
  questions: state.questions,
});

const mapDispatchToProps = (dispatch) => ({
  tokenToProps: () => dispatch(fetchToken()),
  questionsToProps: (token) => dispatch(fetchQuestions(token)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);
