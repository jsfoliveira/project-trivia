import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { fetchQuestions } from '../redux/actions/asyncActions';

class Game extends React.Component {
  constructor() {
    super();
    this.state = {
      answers: [],
    };
  }

  async componentDidMount() {
    const { token, questionsToProps } = this.props;
    await questionsToProps(token);
    this.renderAnswer();
  }

  renderAnswer = () => {
    const { token: { results } } = this.props;
    const random = Math.floor(Math.random() * (results[0].incorrect_answers.length + 1));
    const wrong = results[0].incorrect_answers;
    const right = (results[0].correct_answer);
    wrong.splice(random, 0, right);
    this.setState({
      answers: wrong,
    });
  }

  render() {
    const { token: { results } } = this.props;
    const { answers } = this.state;
    return (
      <div>
        <h2>Game!</h2>
        {
          results
          && (
            <div>
              <p data-testid="question-category">{results[0].category}</p>
              <p data-testid="question-text">{results[0].question}</p>
            </div>)
        }
        {
          answers
          && (
            answers.map(
              (answer, index) => {
                let testid = '';
                if (answer === results[0].correct_answer) {
                  testid = 'correct-answer';
                } else { testid = `wrong-answer-${index}`; }
                return (
                  <button
                    key={ answer }
                    data-testid={ testid }
                    type="button"
                  >
                    {answer}

                  </button>);
              },
            )
          )
        }
      </div>
    );
  }
}

Game.propTypes = {
  token: PropTypes.string.isRequired,
  results: PropTypes.arrayOf(PropTypes.object).isRequired,
  questionsToProps: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  token: state.token,
});

const mapDispatchToProps = (dispatch) => ({
  questionsToProps: (token) => dispatch(fetchQuestions(token)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);
