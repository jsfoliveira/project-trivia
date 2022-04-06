import { combineReducers } from 'redux';
import asyncReducer from './asyncReducer';
import player from './player';

const rootReducer = combineReducers({ player, asyncReducer });

export default rootReducer;
