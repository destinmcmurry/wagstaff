import { combineReducers } from 'redux';
import homeroomsReducer from './homerooms';
import studentsReducer from './students';

export default combineReducers({
  homerooms: homeroomsReducer,
  students: studentsReducer
})
