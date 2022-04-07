import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../components/Header';

class Feedback extends React.Component {
  render() {
    const { scorePlayer, correctAnswer } = this.props;
    const rightAnswer = 'Well Done!';
    const wrongAnswer = 'Could be better...';
    const numberMin = 3;
    const mensagem = correctAnswer >= numberMin ? rightAnswer : wrongAnswer;
    return (
      <div>
        <Header />
        <h1
          data-testid="feedback-text"
        >
          { mensagem }
        </h1>
        <div>
          <p
            data-testid="feedback-total-score"
          >
            Score total:
            { scorePlayer }
          </p>
          <p
            data-testid="feedback-total-question"
          >
            Quantidade respostas certas:
            { correctAnswer }
          </p>
        </div>
        <Link to="/">
          <button
            type="button"
            data-testid="btn-play-again"
          >
            Play Again
          </button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  scorePlayer: state.player.score,
  // correctAnswer: state.player. (ainda não tenho essa informação)
});

Feedback.propTypes = {
  scorePlayer: PropTypes.number.isRequired,
  correctAnswer: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(Feedback);
