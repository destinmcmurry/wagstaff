/* combineReducers is not currently used, but eventually should be for modular code :D */
import { combineReducers } from 'redux'

const initialState = {
  homerooms: [],
  students: []
}

const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    default: return state
  }
};

export default rootReducer
