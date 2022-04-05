import { SET_LOGIN } from '../actions/actions.types';

const INITIAL_STATE = {
  name: '',
  assertions: '',
  score: '',
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
  default:
    return state;
  }
};

export default player;
