import { requestQuestions, requestToken } from '../services/APIrequest';
import { GET_QUESTIONS, GET_TOKEN, SET_LOGIN } from './actions.types';

export const loginAction = ({ name, gravatarEmail }) => ({
  type: SET_LOGIN,
  name,
  gravatarEmail,
});

export const tokenAction = ({ token }) => ({
  type: GET_TOKEN,
  token,
});

export const questionAction = ({ response_code, results }) => ({
  type: GET_QUESTIONS,
  response_code,
  results,
});

export function fetchToken() {
  return async (dispatch) => {
    try {
      const response = await requestToken();
      dispatch(loginAction(response));
    } catch (error) {
      dispatch(error('errouuuuu'));
    }
  };
}

export function fetchQuestions(token) {
  return async (dispatch) => {
    try {
      const response = await requestQuestions(token);
      dispatch(loginAction(response));
    } catch (error) {
      dispatch(error({
        response_code: 3,
        results: [],
      }));
    }
  };
}
