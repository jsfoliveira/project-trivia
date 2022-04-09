import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTime, timerAction } from '../redux/actions';

class Timer extends Component {
  constructor() {
    super();
    this.state = {
      counter: 30,
    };
  }

  componentDidMount() {
    this.clock();
  }

  componentDidUpdate() {
    const { counter } = this.state;
    const { dispatchTimer, stopTime, timeToProps } = this.props;
    const maxTimer = 0;
    if (counter === maxTimer) {
      clearInterval(this.interval);
      dispatchTimer(true);
    }
    if (stopTime) {
      timeToProps(counter);
      clearInterval(this.interval);
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
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
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchTimer: (timerIsOver) => dispatch(
    timerAction(timerIsOver),
  ),
  timeToProps: (counter) => dispatch(getTime(counter)),
});

Timer.propTypes = {
  dispatchTimer: PropTypes.func.isRequired,
  stopTime: PropTypes.bool.isRequired,
  timeToProps: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Timer);
