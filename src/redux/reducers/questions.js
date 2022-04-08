import { GET_QUESTIONS } from '../actions/actions.types';

const INITIAL_STATE = {};

const questions = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_QUESTIONS:
    return {
      response_code: action.response_code,
      results: action.results,
    };
  default:
    return state;
  }
};

export default questions;
