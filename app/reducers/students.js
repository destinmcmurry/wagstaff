import axios from 'axios';

// action types
const SET_STUDENTS = 'SET_STUDENTS';
const ADD_STUDENT = 'ADD_STUDENT';
const DELETE_STUDENT = 'DELETE_STUDENT';

// action creators
export const setStudents = students => ({ type: SET_STUDENTS, students });
export const addStudent = student => ({ type: ADD_STUDENT, student });
export const deleteStudent = studentId => ({ type: DELETE_STUDENT, studentId });

// reducer 
const studentsReducer = (state = [], action) => {
  switch (action.type) {
    case SET_STUDENTS:
      return action.students;
    case ADD_STUDENT:
      return [...state, action.student];
    case DELETE_STUDENT:
      return state.filter(({ id }) => id !== action.studentId);
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

export const destroyStudent = (id, currentHistory) => {
  
    return dispatch =>
      axios.delete(`/api/students/${id}`)
        .then(dispatch(deleteStudent(id)))
        .then(() => {
          currentHistory.push('/students')
        })
        .catch(console.error);
  
  }



export default studentsReducer;