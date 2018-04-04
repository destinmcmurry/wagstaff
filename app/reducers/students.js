import axios from 'axios';

// action types
const SET_STUDENTS = 'SET_STUDENTS';
const ADD_STUDENT = 'ADD_STUDENT';

// action creators
export const setStudents = students => ({ type: SET_STUDENTS, students });
export const addStudent = student => ({ type: ADD_STUDENT, student })

// reducer 
const studentsReducer = (state = [], action) => {
  switch (action.type) {
    case SET_STUDENTS:
      return action.students;
    case ADD_STUDENT:
      return [...state, action.student];
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

export const postStudent = student => {

  return dispatch => {
    axios.post('/api/students', student)
    .then(res => res.data)
    .then(newStudent => {
      dispatch(addStudent(newStudent))
    })
    .catch(console.error);
  }
}



export default studentsReducer;