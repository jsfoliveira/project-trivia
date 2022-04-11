import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../components/Header';

class Feedback extends React.Component {
  render() {
    const { scorePlayer, assertions } = this.props;
    const rightAnswer = 'Well Done!';
    const wrongAnswer = 'Could be better...';
    const numberMin = 120;
    const mensagem = scorePlayer >= numberMin ? rightAnswer : wrongAnswer;
    return (
      <div>
        <Header />
        <h1 data-testid="feedback-text">
          Feedback
          { mensagem }
        </h1>
        <div>
          Pontuação:
          <div data-testid="feedback-total-score">
            { scorePlayer === '0' && Number(0) }
            { scorePlayer !== '0' && Number(scorePlayer) }
          </div>
        </div>
        <p
          data-testid="feedback-total-question"
        >
          Quantidade respostas certas:
          { assertions }
        </p>
        <Link to="/">
          <button
            type="button"
            data-testid="btn-play-again"
          >
            Play Again
          </button>
        </Link>
        <Link to="/ranking">
          <button
            type="button"
            data-testid="btn-ranking"
          >
            Ranking
          </button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  scorePlayer: state.player.score,
  assertions: state.player.assertions,
});

Feedback.propTypes = {
  scorePlayer: PropTypes.number.isRequired,
  assertions: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(Feedback);
