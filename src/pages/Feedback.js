import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';

class Feedback extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     feedback: '',
  //   };
  // }

  // componentDidMount() {
  //   const { scorePlayer } = this.props;
  //   const rightAnswer = 'Well Done!';
  //   const wrongAnswer = 'Could be better...';
  //   const numberMin = 3;
  //   if (scorePlayer < numberMin) {
  //     this.setState({
  //       feedback: wrongAnswer,
  //     });
  //   } if (scorePlayer > numberMin) {
  //     this.setState({
  //       feedback: rightAnswer,
  //     });
  //   }
  // }

  render() {
    const { scorePlayer } = this.props;
    // const { feedback } = this.state;
    const rightAnswer = 'Well Done!';
    const wrongAnswer = 'Could be better...';
    const numberMin = 3;
    const mensagem = scorePlayer >= numberMin ? rightAnswer : wrongAnswer;
    return (
      <div>
        <Header />
        <h1
          data-testid="feedback-text"
        >
          { mensagem }
          {/* { feedback } */}
        </h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  scorePlayer: state.player.score,
});

Feedback.propTypes = {
  scorePlayer: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Feedback);
