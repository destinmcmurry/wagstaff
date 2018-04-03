import axios from 'axios';

// action types
const SET_STUDENTS = 'SET_STUDENTS';

// action creators
const setStudents = students => ({ type: SET_STUDENTS, students });

// reducer 
const studentsReducer = (state = [], action) => {
  switch (action.type) {
    case SET_STUDENTS:
      return action.students;
    default:
      return state;
  }
}

// thunk
export const fetchStudents = () => {
  return dispatch => {
    axios.get('/api/students')
    .then(res => res.data)
    .then(students => {
      dispatch(setStudents(students))
    })
    .catch(console.error);
  }
}

export default studentsReducer;