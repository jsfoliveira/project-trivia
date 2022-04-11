import React from 'react';
import PropTypes from 'prop-types';
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
      <div className="min-vw-100 min-vh-100">
        <Header />
        <div
          className="d-flex flex-column
          justify-content-center align-items-center p-3"
        >

          <h1 data-testid="feedback-text">
            { mensagem }
          </h1>
          <div className="d-flex">
            Pontuação:
            <div data-testid="feedback-total-score">
              { scorePlayer }
            </div>
          </div>
          <p
            data-testid="feedback-total-question"
          >
            Acertos:
            { assertions }
          </p>
          <div className="w-100 d-flex flex-column">
            <button
              type="button"
              data-testid="btn-play-again"
              className="btn btn-primary mb-1"
              onClick={ () => {
                const { history } = this.props;
                history.push('/');
              } }
            >
              Play Again
            </button>
            <button
              type="button"
              data-testid="btn-ranking"
              className="btn btn-warning"
              onClick={ () => {
                const { history } = this.props;
                history.push('/ranking');
              } }
            >
              Ranking
            </button>
          </div>

        </div>

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
  history: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
};

export default connect(mapStateToProps)(Feedback);
