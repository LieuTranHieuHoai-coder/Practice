import { combineReducers } from 'redux';
import ticketReducer from './ticketReducer';
import formReducer from './formReducer';

const rootReducer = combineReducers({
  ticketReducer: ticketReducer,
  formReducer: formReducer,
});

export default rootReducer;