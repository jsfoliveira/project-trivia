import { SET_TIMER } from '../actions/actions.types';

const INITIAL_STATE = { timerIsOver: false };

const timer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SET_TIMER:
    return { timerIsOver: action.timerIsOver };
  default:
    return state;
  }
};

export default timer;
