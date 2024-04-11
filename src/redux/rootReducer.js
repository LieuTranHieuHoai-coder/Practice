import { combineReducers } from 'redux';
import ticketReducer from './ticketReducer';

const rootReducer = combineReducers({
  ticketReducer: ticketReducer
});

export default rootReducer;