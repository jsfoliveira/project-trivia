import { requestQuestions, requestToken, requestGravatar } from '../services/APIrequest';
import {
  GET_QUESTIONS,
  GET_TOKEN,
  GET_GRAVATAR }
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
  return async (dispatch) => {
    try {
      const response = await requestQuestions(token);
      dispatch(questionAction(response));
    } catch (error) {
      dispatch(error({
        response_code: 3,
        results: [],
      }));
    }
  };
}

export const gravatarAction = (image) => ({
  type: GET_GRAVATAR,
  image,
});

export function fetchGravatar(email) {
  return async (dispatch) => {
    try {
      const response = await requestGravatar(email);
      dispatch(gravatarAction(response));
    } catch (error) {
      dispatch('error');
    }
  };
}
