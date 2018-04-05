import React from 'react';
import { connect } from 'react-redux';
import store from '../store';
import { destroyStudent } from '../reducers/students';

const SingleStudent = (props) => {

  const { studentArr, studentId } = props;

  return (
    <div>
    {
      studentArr.map(student => {
        return (
          <div key={student.id} id='single-student'>
            <img src={student.studentImg} />
            <h1>{student.name}</h1>
            <h4>{student.email}</h4>
            <p>gpa: {student.gpa}</p>
          </div>
          )
        })
      }
      <button id='delete-btn' onClick={()=>destroyStudent(studentId)}> ❌ Delete </button>
    </div>
  )

}

const mapState = (state, ownProps) => {

  const studentId = Number(ownProps.match.params.studentId);

  return {
    studentArr: state.students.filter(student => student.id === studentId),
    studentId
  }
}

export default connect(mapState)(SingleStudent);