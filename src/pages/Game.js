import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Timer from '../components/Timer';
import { scoreAction } from '../redux/actions';
import { fetchQuestions, fetchToken } from '../redux/actions/asyncActions';
import './Game.css';

class Game extends React.Component {
  constructor() {
    super();
    this.state = {
      answers: [],
      click: false,
      next: false,
      resposta: 0,
    };
  }

  async componentDidMount() {
    const { token, questionsToProps } = this.props;
    await questionsToProps(token);
    this.renderAnswer();
  }

  handleClick = ({ target }) => {
    this.setState({
      click: true,
    });
    const { questions: { results } } = this.props;
    const isCorrect = target.innerText === results[0].correct_answer;
    if (isCorrect) this.scoreboard(results[0].difficulty);
  }

  renderAnswer = () => {
    const { questions: { results } } = this.props;
    const random = 0.5;
    const anwsersArray = results[0].incorrect_answers.concat(
      results[0].correct_answer,
    );
    const shuffledArray = anwsersArray.sort(() => Math.random() - random);
    this.setState({
      answers: shuffledArray,
    });
  }

  scoreboard = (difficulty) => {
    const { scoreTotal, counter } = this.props;
    const minPoints = 10;
    const pesoUm = 1;
    const pesoDois = 2;
    const pesoTres = 3;
    let point = 0;
    switch (difficulty) {
    case 'easy':
      point = minPoints + (counter * pesoUm);
      scoreTotal(point);
      break;
    case 'medium':
      point = minPoints + (counter * pesoDois);
      scoreTotal(point);
      break;
    case 'hard':
      point = minPoints + (counter * pesoTres);
      scoreTotal(point);
      break;
    default:
      break;
    }
  }

  handleNext = async () => {
    const { resposta } = this.state;
    const { token, questionsToProps, history } = this.props;
    const maxQuestions = 4;
    if (resposta === maxQuestions) history.push('/feedback');
    await questionsToProps(token);
    this.setState({
      resposta: resposta + 1,
      click: false,
      next: true,
    });
    this.renderAnswer();
  }

  nextReset= () => {
    this.setState({
      next: false,
    });
  }

  render() {
    const { questions: { results } } = this.props;
    const { answers, click, time, next } = this.state;
    return (
      <div>
        <h2>Game!</h2>
        <Header />
        <Timer stopTime={ click } time={ time } next={ next } reset={ this.nextReset } />
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
                const { timerIsOver } = this.props;
                return (
                  <button
                    key={ index }
                    data-testid={ testid }
                    type="button"
                    onClick={ this.handleClick }
                    className={ click ? classe : '' }
                    disabled={ timerIsOver }
                  >
                    {answer}
                  </button>);
              },
            )
          )
          }
        </div>
        {
          click
          && (
            <button
              type="button"
              data-testid="btn-next"
              onClick={ this.handleNext }
            >
              Próxima

            </button>
          )
        }
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
  timerIsOver: PropTypes.bool.isRequired,
  scoreTotal: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired,
  history: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
};

const mapStateToProps = (state) => ({
  token: state.token,
  questions: state.questions,
  timerIsOver: state.timer.timerIsOver,
  assertions: state.player.assertions,
  scorePlayer: state.player.score,
  counter: state.counter,
});

const mapDispatchToProps = (dispatch) => ({
  tokenToProps: () => dispatch(fetchToken()),
  questionsToProps: (token) => dispatch(fetchQuestions(token)),
  scoreTotal: (score, assertions) => dispatch(scoreAction(score, assertions)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);
