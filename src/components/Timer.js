// import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Timer extends Component {
  constructor() {
    super();
    this.state = {
      counter: 5,
    };
  }

  componentDidMount() {
    this.clock();
  }

  componentDidUpdate() {
    const { counter } = this.state;
    const maxTimer = 0;
    if (counter === maxTimer) {
      clearInterval(this.interval);
      console.log('parou o interval');
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  stop = () => {
    clearInterval(this.interval);
    this.setState({
      counter: 5,
    });
  }

  clock = () => {
    const timer = 1000;
    this.interval = setInterval(
      () => {
        this.setState((state) => ({ counter: state.counter - 1 }));
      }, timer,
    );
  }

  render() {
    const { counter } = this.state;
    return (
      <div>
        { counter }
        <button
          type="button"
          onClick={ this.stop }
        >
          stop

        </button>
      </div>
    );
  }
}

/* const mapDispatchToProps = (state) => (
  {
    namePlayer: state.player.name,
    scorePlayer: state.player.score,
    emailPlayer: state.player.gravatarEmail,
  }
); */

/* Timer.propTypes = {
  namePlayer: PropTypes.string.isRequired,
  emailPlayer: PropTypes.string.isRequired,
  scorePlayer: PropTypes.string.isRequired,
}; */

// export default connect(null, mapDispatchToProps)(Timer);
export default Timer;
