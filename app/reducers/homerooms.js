import axios from 'axios';

// action types
const SET_HOMEROOMS = 'SET_HOMEROOMS';
const ADD_HOMEROOM = 'ADD_HOMEROOM';
const DELETE_HOMEROOM = 'DELETE_HOMEROOM';

// action creators
export const setHomerooms = homerooms => ({ type: SET_HOMEROOMS, homerooms });
export const addHomeroom = homeroom => ({ type: ADD_HOMEROOM, homeroom });
export const deleteHomeroom = homeroomId => ({ type: DELETE_HOMEROOM, homeroomId });

// reducer 
const homeroomsReducer = (state = [], action) => {
  switch (action.type) {
    case SET_HOMEROOMS:
      return action.homerooms;
    case ADD_HOMEROOM:
      return [...state, action.homeroom];
    case DELETE_HOMEROOM:
      return state.filter(({ id }) => id !== action.homeroomId);
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

export const destroyHomeroom = (id, currentHistory) => {

console.log(currentHistory);

  return dispatch =>
    axios.delete(`/api/homerooms/${id}`)
      .then(dispatch(deleteHomeroom(id)))
      .then(() => {
        currentHistory.push('/homerooms')
      })
      .catch(console.error);

}

export default homeroomsReducer;