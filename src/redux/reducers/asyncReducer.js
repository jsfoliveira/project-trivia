import { GET_QUESTIONS, GET_TOKEN } from '../actions/actions.types';

const INITIAL_STATE = {
  token: '',
  response_code: 0,
  results: [],
};

const tokenReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_TOKEN:
    return {
      ...state,
      token: action.token,
    };
  case GET_QUESTIONS:
    return {
      ...state,
      response_code: action.response_code,
      results: action.results,
    };
  default:
    return state;
  }
};

export default tokenReducer;
