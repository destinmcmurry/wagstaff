import React from 'react';
import { connect } from 'react-redux';
import store from '../store';
import { destroyStudent } from '../reducers/students';

const SingleStudent = (props) => {

  const { handleClick, student, studentId, homerooms } = props;

  return (
    <div>
      <div key={student.id} id='single-student'>
        <img src={student.studentImg} />
        <h1>{student.name}</h1>
        <p>email: {student.email}</p>
        <p>gpa: {student.gpa}</p>
        {
          homerooms && homerooms.find(homeroom => student.homeroomId === homeroom.id) ? <p>{ homeroom.teacher }'s homeroom</p> : <small>not assigned a homeroom</small>
        }
        <br/>
      </div>
      <button id='update-btn'> ✏️ Update Information </button>
      <button id='delete-btn' onClick={()=>handleClick(studentId)}> ❌ Delete Student </button>
    </div>
  )

}


const mapState = (state, ownProps) => {

  const studentId = Number(ownProps.match.params.studentId);

  return {
    student: state.students.find(student => student.id === studentId) || {},
    homeroom: state.homerooms,
    studentId
  }
}

const mapProps = (dispatch, ownProps) => {
  return {
    handleClick(studentId) {
      dispatch(destroyStudent(studentId, ownProps.history));
    }
  }
}

export default connect(mapState, mapProps)(SingleStudent);