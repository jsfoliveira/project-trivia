import { GET_TOKEN } from '../actions/actions.types';

const INITIAL_STATE = '';

const token = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_TOKEN:
    return action.token;
    //   ...state,
    //   token: action.token,
    //   response_code: action.response_code,
    //   response_message: action.response_message,
    // };
  default:
    return state;
  }
};

export default token;
