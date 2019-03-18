import { combineReducers } from 'redux';
import bookReducer from './bookReducer';
import flagsReducer from './flagsReducer';

const rootReducer = combineReducers({
  book: bookReducer,
  flags: flagsReducer
})

export default rootReducer;
