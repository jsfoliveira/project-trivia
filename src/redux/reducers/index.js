import { combineReducers } from 'redux';
import player from './player';
import questions from './questions';
import token from './token';
import timer from './timer';

const rootReducer = combineReducers({ player, token, questions, timer });

export default rootReducer;
