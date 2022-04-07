import { requestQuestions, requestToken } from '../services/APIrequest';
import {
  GET_QUESTIONS,
  GET_TOKEN,
}
from './actions.types';

export const tokenAction = ({ token }) => ({
  type: GET_TOKEN,
  token,
});

export const questionAction = ({ response, results }) => ({
  type: GET_QUESTIONS,
  response_code: response,
  results,
});

export function fetchToken() {
  return async (dispatch) => {
    try {
      const response = await requestToken();
      dispatch(tokenAction(response));
    } catch (error) {
      dispatch(error);
    }
  };
}

export function fetchQuestions(token) {
  console.log('token', token);
  return async (dispatch) => {
    try {
      const response = await requestQuestions(token);
      dispatch(questionAction(response));
      return response;
    } catch (error) {
      // dispatch(error({
      //   response_code: 3,
      //   results: [],
      // }));
    }
  };
}
