import { combineReducers } from 'redux';
import player from './player';
import token from './token';
import gravatar from './gravatar';

const rootReducer = combineReducers({ player, token, gravatar });

export default rootReducer;
