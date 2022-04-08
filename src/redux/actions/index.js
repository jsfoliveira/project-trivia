import { SET_LOGIN, SET_TIMER } from './actions.types';

const loginAction = ({ name, gravatarEmail }) => ({
  type: SET_LOGIN,
  name,
  gravatarEmail,
});

export const timerAction = (timerIsOver) => ({
  type: SET_TIMER,
  timerIsOver,
});

export default loginAction;
