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
    const maxTimer = -1;
    console.log('to atualizando');
    if (counter === maxTimer) {
      console.log('limpei o interval');
      clearInterval(this.clock);
      this.setState({ counter: 5 });
    }
  }

  componentWillUnmount() {
    clearInterval(this.clock);
  }

  clock = () => {
    const timer = 1000;
    setInterval(
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
