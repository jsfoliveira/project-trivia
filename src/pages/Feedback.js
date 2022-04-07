import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';

class Feedback extends React.Component {
  render() {
    const { acertos } = this.props;
    const rightAnswer = 'Well Done!';
    const wrongAnswer = 'Could be better...';
    const numberMin = 3;
    const mensagem = acertos >= numberMin ? rightAnswer : wrongAnswer;
    return (
      <div>
        <Header />
        <h1
          data-testid="feedback-text"
        >
          { mensagem }
        </h1>
      </div>
    );
  }
}

const mapStateToProps = () => ({
  acertos: state.player.acertos,
});

Feedback.propTypes = {
  acertos: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Feedback);
