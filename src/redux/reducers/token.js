import { GET_TOKEN } from '../actions/actions.types';

const INITIAL_STATE = '';

const token = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_TOKEN:
    return action.token;
  default:
    return state;
  }
};

export default token;
