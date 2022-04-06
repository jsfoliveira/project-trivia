import { GET_TOKEN } from '../actions/actions.types';

const INITIAL_STATE = '';

const token = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_TOKEN:
    return action.token;
  // case GET_QUESTIONS:
  //   return {
  //     ...state,
  //     response_code: action.response_code,
  //     results: action.results,
  //   };
  default:
    return state;
  }
};

export default token;
