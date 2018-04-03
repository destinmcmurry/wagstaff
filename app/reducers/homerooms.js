import axios from 'axios';

// action types
const SET_HOMEROOMS = 'SET_HOMEROOMS';

// action creators
export const setHomerooms = homerooms => ({ type: SET_HOMEROOMS, homerooms });

// reducer 
const homeroomsReducer = (state = [], action) => {
  switch (action.type) {
    case SET_HOMEROOMS:
      return action.homerooms;
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
      console.log('inside action creator', homerooms);
      dispatch(setHomerooms(homerooms))
    })
    .catch(console.error);
  }

}

export default homeroomsReducer;