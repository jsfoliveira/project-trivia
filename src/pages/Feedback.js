<<<<<<< HEAD
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
=======
import PropTypes from 'prop-types';
import React from 'react';
>>>>>>> 78901f916189ba0a25b817259b749934b2cab210
import { connect } from 'react-redux';
import Header from '../components/Header';

class Feedback extends React.Component {
  render() {
<<<<<<< HEAD
    const { scorePlayer, correctAnswer } = this.props;
    const rightAnswer = 'Well Done!';
    const wrongAnswer = 'Could be better...';
    const numberMin = 3;
    const mensagem = correctAnswer >= numberMin ? rightAnswer : wrongAnswer;
=======
    const { acertos } = this.props;
    const rightAnswer = 'Well Done!';
    const wrongAnswer = 'Could be better...';
    const numberMin = 3;
    const mensagem = acertos >= numberMin ? rightAnswer : wrongAnswer;
>>>>>>> 78901f916189ba0a25b817259b749934b2cab210
    return (
      <div>
        <Header />
        <h1
          data-testid="feedback-text"
        >
          { mensagem }
        </h1>
<<<<<<< HEAD
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
        <Link to="/ranking">
          <button
            type="button"
            data-testid="btn-ranking"
          >
            Ranking
          </button>
        </Link>
=======
>>>>>>> 78901f916189ba0a25b817259b749934b2cab210
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
<<<<<<< HEAD
  scorePlayer: state.player.score,
  // correctAnswer: state.player. (ainda não tenho essa informação)
});

Feedback.propTypes = {
  scorePlayer: PropTypes.number.isRequired,
  correctAnswer: PropTypes.number.isRequired,
=======
  acertos: state.player.acertos,
});

Feedback.propTypes = {
  acertos: PropTypes.string.isRequired,
>>>>>>> 78901f916189ba0a25b817259b749934b2cab210
};

export default connect(mapStateToProps)(Feedback);
