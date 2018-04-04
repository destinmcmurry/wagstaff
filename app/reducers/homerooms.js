import axios from 'axios';

// action types
const SET_HOMEROOMS = 'SET_HOMEROOMS';
const ADD_HOMEROOM = 'ADD_HOMEROOM';

// action creators
export const setHomerooms = homerooms => ({ type: SET_HOMEROOMS, homerooms });
export const addHomeroom = homeroom => ({ type: ADD_HOMEROOM, homeroom })

// reducer 
const homeroomsReducer = (state = [], action) => {
  switch (action.type) {
    case SET_HOMEROOMS:
      return action.homerooms;
    case ADD_HOMEROOM:
      return [...state, action.homeroom];
    default:
      return state;
  }
}

// thunk
export const fetchHomerooms = () => {

  return dispatch => {
    axios.get('/api/homerooms')
    .then(res => res.data)
    .then(homerooms => {
      dispatch(setHomerooms(homerooms))
    })
    .catch(console.error);
  }
}

export const postHomeroom = homeroom => {

  return dispatch => {
    axios.post('/api/homerooms', homeroom)
    .then(res => res.data)
    .then(newHomeroom => {
      dispatch(addHomeroom(newHomeroom))
    })
    .catch(console.error);
  }
}

export default homeroomsReducer;