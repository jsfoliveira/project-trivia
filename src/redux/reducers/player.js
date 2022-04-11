import { SET_ASSERTIONS_SCORE, SET_LOGIN } from '../actions/actions.types';

const INITIAL_STATE = {
  name: '',
  assertions: '',
  score: 0,
  gravatarEmail: '',
};

const player = (state = INITIAL_STATE, action) => {
  const { name, gravatarEmail } = action;
  switch (action.type) {
  case SET_LOGIN:
    return {
      ...state,
      name,
      gravatarEmail,
    };
  case SET_ASSERTIONS_SCORE:
    return {
      ...state,
      score: state.score + action.score,
      assertions: state.assertions + action.assertions,
    };
  default:
    return state;
  }
};

export default player;
