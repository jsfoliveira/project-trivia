import { combineReducers } from 'redux';
import player from './player';
import questions from './questions';
import { counter, timer } from './timer';
import token from './token';

const rootReducer = combineReducers({ player, token, questions, timer, counter });

export default rootReducer;
