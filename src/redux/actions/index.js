import { GET_TIME, SET_ASSERTIONS_SCORE, SET_LOGIN, SET_TIMER } from './actions.types';

export const loginAction = ({ name, gravatarEmail }) => ({
  type: SET_LOGIN,
  name,
  gravatarEmail,
});

export const timerAction = (timerIsOver) => ({
  type: SET_TIMER,
  timerIsOver,
});

export function scoreAction(score, assertions) {
  return {
    type: SET_ASSERTIONS_SCORE,
    score,
    assertions,
  };
}

export const getTime = (counter) => ({
  type: GET_TIME,
  counter,
});
