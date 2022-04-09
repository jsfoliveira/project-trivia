import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { timerAction } from '../redux/actions';

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
    const { dispatchTimer } = this.props;
    const maxTimer = 0;
    if (counter === maxTimer) {
      clearInterval(this.interval);
      dispatchTimer(true);
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
});

Timer.propTypes = {
  dispatchTimer: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Timer);
