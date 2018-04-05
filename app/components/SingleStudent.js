import React from 'react';
import { connect } from 'react-redux';
import store from '../store';
import { destroyStudent } from '../reducers/students';

const SingleStudent = (props) => {

  const { handleClick, studentArr, studentId, homerooms } = props;
  const homeroom = homerooms.filter(homeroom => homeroom.id === studentArr[0].homeroomId)

  return (
    <div>
    {
      studentArr.map(student => {
        return (
          <div key={student.id} id='single-student'>
            <img src={student.studentImg} />
            <h1>{student.name}</h1>
            <h4>{student.email}</h4>
            <h4>gpa: {student.gpa}</h4>
            {
            homeroom.length ? <small>{ homeroom[0].teacher }'s homeroom</small> : <small>not assigned a homeroom</small>
            }
          </div>
          )
        })
      }
      { homeroom.length ? <button id='delete-btn' onClick={()=>handleClick(studentId)}> ❌ Delete Student </button> : null }
    </div>
  )

}

const mapState = (state, ownProps) => {

  const studentId = Number(ownProps.match.params.studentId);

  return {
    studentArr: state.students.filter(student => student.id === studentId) || [],
    homerooms: state.homerooms,
    studentId
  }
}

const mapProps = (dispatch, ownProps) => {
  return {
    handleClick(studentId) {
      dispatch(destroyStudent(studentId), ownProps.history);
    }
  }
}

export default connect(mapState, mapProps)(SingleStudent);