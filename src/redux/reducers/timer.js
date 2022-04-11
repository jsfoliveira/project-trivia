import { GET_TIME, SET_TIMER } from '../actions/actions.types';

const INITIAL_STATE = { timerIsOver: false };

export const timer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SET_TIMER:
    return { timerIsOver: action.timerIsOver };
  default:
    return state;
  }
};

export const counter = (state = 0, action) => {
  switch (action.type) {
  case GET_TIME:
    return action.counter;
  default:
    return state;
  }
};
